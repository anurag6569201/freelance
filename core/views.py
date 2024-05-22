# global related imports
from django.shortcuts import redirect, render
from django.contrib import messages

# authentication related imports
from django.contrib.auth.decorators import login_required

# index page
@login_required(login_url='userauths:sign-in')
def index(request):
    context={

    }
    return render(request, "core/index.html", context)

# about us page
@login_required(login_url='userauths:sign-in')
def about(request):
    context={

    }
    return render(request, "core/about.html", context)



# contact related imports
from datetime import datetime
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django import forms
from core.forms import ContactForm

# contact us page
@login_required(login_url='userauths:sign-in')
def contact(request):
    today_date = datetime.now().strftime('%Y-%m-%d')
    if request.method == "POST":
        form = ContactForm(request.POST)
        
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            content = form.cleaned_data['content']

            html = render_to_string('components/email.html', {
                'name': name,
                'email': email,
                'phone': phone,
                'content': content,
            })

            send_mail("The contact form subject", 'this is the message', email, ['email@gmail.com'], html_message=html)
            messages.success(request, 'Form submitted successfully!')
            return redirect("core:index")
    else:
        form = ContactForm()

    context={
        'today_date': today_date,
        'form': form,
    }
    return render(request,"core/contact.html",context)

# advertise page
@login_required(login_url='userauths:sign-in')
def advertise(request):
    context={

    }
    return render(request, "core/advertise.html", context)

# privacy page
@login_required(login_url='userauths:sign-in')
def privacy(request):
    context={

    }
    return render(request, "core/privacy.html", context)



# upload imports
from .forms import DocumentForm
from .models import Document

@login_required
def upload_file(request):
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        files = request.FILES.getlist('file')
        if form.is_valid():
            for f in files:
                document = Document(file=f)
                document.save()
                # Sign each file (implement signing logic here)
            return redirect('home')
    else:
        form = DocumentForm()
    return render(request, 'signer/upload.html', {'form': form})


import os
import zipfile
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.conf import settings
import json

@csrf_exempt
def download_all(request):
    if request.method == 'POST':
        file_names = json.loads(request.POST['files'])
        save_option = request.POST['save_option']
        save_location = request.POST['save_path']
        zip_subdir = "download"
        zip_filename = "%s.zip" % zip_subdir

        # Create a temporary zip file
        temp_zip_path = os.path.join(settings.MEDIA_ROOT, zip_filename)
        with zipfile.ZipFile(temp_zip_path, "w") as zipf:
            for filename in file_names:
                file_path = os.path.join(settings.MEDIA_ROOT, filename)
                if os.path.exists(file_path):
                    zipf.write(file_path, os.path.basename(file_path))

        # Save the zip file based on the user's choice
        if save_option == 'local':
            final_zip_path = os.path.join(save_location, zip_filename)
            os.rename(temp_zip_path, final_zip_path)
        elif save_option == 'workspace':
            # Save to workspace or cloud storage
            # Implementation depends on your specific setup (e.g., AWS S3, Google Cloud Storage)
            pass

        # Return the zip file for download
        if save_option == 'local':
            with open(final_zip_path, 'rb') as fh:
                response = HttpResponse(fh.read(), content_type="application/zip")
                response['Content-Disposition'] = f'attachment; filename={zip_filename}'
                return response
        elif save_option == 'workspace':
            # Return a success message or redirect to the workspace page
            return JsonResponse({'message': 'Files saved to workspace'})

    return JsonResponse({'error': 'Invalid request'}, status=400)
