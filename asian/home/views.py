from django.shortcuts import render
from home import models

def home(request):
    return render(request,"pages/home/index.html")


def about(request):
    return render(request,"pages/about/about.html")


def team(request):
    return render(request,"pages/about/team.html")


def corp_service(request):
    title = "Corporate"
    corporate = models.CorporateSerices.objects.all()
    context={
        'corporate':corporate,
        'title':title,
    }
    return render(request,"pages/services/corporate.html",context)


def corp_social(request):
    title = "Social"
    social = models.SocialSerices.objects.all()
    context={
        'social':social,
        'title':title,
    }
    return render(request,"pages/services/social.html",context)

def corp_exhibition(request):
    title = "Exhibitions"
    exhibition = models.ExhibitionSerices.objects.all()
    context={
        'exhibition':exhibition,
        'title':title,
    }
    return render(request,"pages/services/exhibition.html",context)


def corp_event(request):
    title = "Events"
    event = models.EventSerices.objects.all()
    context={
        'event':event,
        'title':title,
    }
    return render(request,"pages/services/event.html",context)





def gallery(request):
    return render(request,"pages/gallery/gallery.html")



def career(request):
    return render(request,"pages/career/career.html")



def contact(request):
    return render(request,"pages/contact/contact.html")

