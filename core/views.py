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