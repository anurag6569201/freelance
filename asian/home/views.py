from django.shortcuts import render

def home(request):
    return render(request,"pages/home/index.html")


def about(request):
    return render(request,"pages/about/about.html")


def team(request):
    return render(request,"pages/about/team.html")


def corp_service(request):
    return render(request,"pages/services/corporate.html")


def corp_social(request):
    return render(request,"pages/services/social.html")