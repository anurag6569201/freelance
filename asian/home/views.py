from django.shortcuts import render,get_object_or_404
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from home.forms import ContactForm ,JobApplicationForm
from home import models

def home(request):
    testimonial=models.Testimonials.objects.all()
    context={
        'testimonial':testimonial,
    }
    return render(request,"pages/home/index.html",context)


def about(request):
    return render(request,"pages/about/about.html")


def team(request):
    return render(request,"pages/about/team.html")


def corp_service(request):
    title = "Corporate"
    corporate = models.CorporateServices.objects.all()
    context={
        'corporate':corporate,
        'title':title,
    }
    return render(request,"pages/services/corporate.html",context)


def corp_social(request):
    title = "Social"
    social = models.SocialServices.objects.all()
    context={
        'social':social,
        'title':title,
    }
    return render(request,"pages/services/social.html",context)

def corp_exhibition(request):
    title = "Exhibitions"
    exhibition = models.ExhibitionServices.objects.all()
    context={
        'exhibition':exhibition,
        'title':title,
    }
    return render(request,"pages/services/exhibition.html",context)


def corp_event(request):
    title = "Events"
    event = models.EventServices.objects.all()
    context={
        'event':event,
        'title':title,
    }
    return render(request,"pages/services/event.html",context)





def gallery(request):
    corporate_images = models.CorporateServiceImage.objects.all()
    social_images = models.SocialServiceImage.objects.all()
    event_images = models.EventServiceImage.objects.all()
    exhibition_images = models.ExhibitionServiceImage.objects.all()

    active_filter = request.GET.get('filter', 'all')

    context = {
        "corporate_images": corporate_images,
        "social_images": social_images,
        "event_images": event_images,
        "exhibition_images": exhibition_images,
        'active_filter': active_filter,
    }
    return render(request, "pages/gallery/gallery.html", context)


from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .forms import JobApplicationForm
from .models import Career

def career(request):
    if request.method == 'POST':
        form = JobApplicationForm(request.POST)
        print(form)
        if form.is_valid():
            # Save the form data to the database
            form.save()

            # Extract the cleaned data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            position = form.cleaned_data['position']
            message = form.cleaned_data['message']

            html_message = render_to_string('../templete/pages/career/components/email.html', {
                'name': name,
                'email': email,
                'position': position,
                'message': message,
            })

            send_mail(
                f'New Job Application for {position}',
                'You have received a new job application.',
                email,
                ['anurag6569201@gmail.com'],
                html_message=html_message
            )
            return redirect('home:application_thank_you')
    else:
        form = JobApplicationForm()
    career = Career.objects.all()
    context = {
        'career': career,
        'form': form,
    }

    # Render the page with the context
    return render(request, "pages/career/career.html", context)


def thank_you(request):
    return render(request, 'pages/career/thank_you.html')

def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            content = form.cleaned_data['content']
            country = form.cleaned_data['country']
            phone = form.cleaned_data['phone']

            html = render_to_string('../templete/pages/contact/components/email.html', {
                'name': name,
                'email': email,
                'content': content,
                'country': country,
                'phone': phone,
            })

            send_mail(
                "The contact form subject",
                'This is the message body',
                email,
                ['anurag6569201@gmail.com'], 
                html_message=html
            )
            return redirect("home:home") 
        
    else:
        form = ContactForm()  

    return render(request, "pages/contact/contact.html", {'form': form})


import json
from django.shortcuts import render, get_object_or_404
from . import models

def corp_service_byid(request, id):
    # Get the SocialService instance by id or return a 404 error if not found
    social_service = get_object_or_404(models.CorporateServices, id=id)
    
    # Get all the subcategories and images related to this SocialService
    all_subcategories = social_service.subcategories.all()

    # Prepare the image data to pass to the template
    subcategories_images = []
    for subcategory in all_subcategories:
        images = [{'image_url': image.image.url, 'subcategory_name': subcategory.name, 'service_name': subcategory.service.name} for image in subcategory.images.all()]
        subcategories_images.append({
            'subcategory_id': subcategory.id,
            'images': images
        })

    context = {
        'social_service': social_service,
        'all_subcategories': all_subcategories,
        'subcategories_images': json.dumps(subcategories_images),  # Convert to JSON and pass to template
    }

    return render(request, "pages/services/services_gall.html", context)


def corp_social_byid(request, id):
    # Get the SocialService instance by id or return a 404 error if not found
    social_service = get_object_or_404(models.SocialServices, id=id)
    
    # Get all the subcategories and images related to this SocialService
    all_subcategories = social_service.subcategories.all()

    # Prepare the image data to pass to the template
    subcategories_images = []
    for subcategory in all_subcategories:
        images = [{'image_url': image.image.url, 'subcategory_name': subcategory.name, 'service_name': subcategory.service.name} for image in subcategory.images.all()]
        subcategories_images.append({
            'subcategory_id': subcategory.id,
            'images': images
        })

    context = {
        'social_service': social_service,
        'all_subcategories': all_subcategories,
        'subcategories_images': json.dumps(subcategories_images),  # Convert to JSON and pass to template
    }

    return render(request, "pages/services/services_gall.html", context)



def corp_exhibition_byid(request, id):
    # Get the SocialService instance by id or return a 404 error if not found
    social_service = get_object_or_404(models.ExhibitionServices, id=id)
    
    # Get all the subcategories and images related to this SocialService
    all_subcategories = social_service.subcategories.all()

    # Prepare the image data to pass to the template
    subcategories_images = []
    for subcategory in all_subcategories:
        images = [{'image_url': image.image.url, 'subcategory_name': subcategory.name, 'service_name': subcategory.service.name} for image in subcategory.images.all()]
        subcategories_images.append({
            'subcategory_id': subcategory.id,
            'images': images
        })

    context = {
        'social_service': social_service,
        'all_subcategories': all_subcategories,
        'subcategories_images': json.dumps(subcategories_images),  # Convert to JSON and pass to template
    }

    return render(request, "pages/services/services_gall.html", context)



def corp_event_byid(request, id):
    # Get the SocialService instance by id or return a 404 error if not found
    social_service = get_object_or_404(models.EventServices, id=id)
    
    # Get all the subcategories and images related to this SocialService
    all_subcategories = social_service.subcategories.all()

    # Prepare the image data to pass to the template
    subcategories_images = []
    for subcategory in all_subcategories:
        images = [{'image_url': image.image.url, 'subcategory_name': subcategory.name, 'service_name': subcategory.service.name} for image in subcategory.images.all()]
        subcategories_images.append({
            'subcategory_id': subcategory.id,
            'images': images
        })

    context = {
        'social_service': social_service,
        'all_subcategories': all_subcategories,
        'subcategories_images': json.dumps(subcategories_images),  # Convert to JSON and pass to template
    }

    return render(request, "pages/services/services_gall.html", context)
