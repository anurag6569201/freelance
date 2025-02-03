from django.shortcuts import render,get_object_or_404

from home import models

def home(request):
    return render(request,"pages/home/index.html")


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

    context = {
        "corporate_images": corporate_images,
        "social_images": social_images,
        "event_images": event_images,
        "exhibition_images": exhibition_images,
    }
    return render(request, "pages/gallery/gallery.html", context)


def career(request):
    return render(request,"pages/career/career.html")



def contact(request):
    return render(request,"pages/contact/contact.html")



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
