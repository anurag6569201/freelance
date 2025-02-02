from django.shortcuts import render
from home import models

def home(request):
    return render(request,"pages/home/index.html")


def about(request):
    return render(request,"pages/about/about.html")


def team(request):
    return render(request,"pages/about/team.html")


def corp_service(request):
    corporate = models.CorporateSerices.objects.all()
    context={
        'corporate':corporate,
    }
    return render(request,"pages/services/corporate.html",context)


def corp_social(request):
    social = models.SocialSerices.objects.all()
    context={
        'social':social,
    }
    return render(request,"pages/services/social.html",context)