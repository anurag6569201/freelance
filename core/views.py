# global related imports
from django.shortcuts import redirect, render
from django.contrib import messages

# authentication related imports
from django.contrib.auth.decorators import login_required

# contact related imports
from datetime import datetime
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django import forms
from core.forms import ContactForm

# uploading imports
from django.urls import reverse
from .forms import UploadBatchForm
from .models import UploadedFile, UploadBatch

# index page
from django.urls import reverse
from .models import UploadedFile, UploadBatch
from .forms import UploadBatchForm
from .utils import sign_pdf_with_token 

@login_required(login_url='userauths:sign-in')
def index(request):
    if request.method == 'POST':
        form = UploadBatchForm(request.POST)
        files = request.FILES.getlist('file')
        if form.is_valid():
            upload_batch = form.save()
            for file in files:
                uploaded_file = UploadedFile(file=file)
                uploaded_file.save()
                upload_batch.files.add(uploaded_file)
                # Sign the PDF
                signed_pdf_path = f'signed_uploads/{file.name}'
                sign_pdf_with_token(uploaded_file.file.path, signed_pdf_path)
                # Save the signed PDF path
                uploaded_file.signed_file = signed_pdf_path
                uploaded_file.save()
            upload_batch.save()
            return redirect(reverse('core:upload_success'))
    else:
        form = UploadBatchForm()
    
    context = {
        'form': form,
    }
    return render(request, "core/index.html", context)

# about us page
@login_required(login_url='userauths:sign-in')
def about(request):
    context={

    }
    return render(request, "core/about.html", context)

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

def upload_success(request):
    batches = UploadBatch.objects.all()
    return render(request, "core/upload_success.html", {'batches': batches})