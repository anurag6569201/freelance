from django.urls import path
from home import views

app_name="home"

urlpatterns=[
    path('',views.home,name='home'),
    path('about/',views.about,name='about'),
    path('about/team/',views.team,name='team'),

    path('service/corporate',views.corp_service,name='corp_service'),
    path('service/social',views.corp_social,name='corp_social'),
    path('service/exhibition',views.corp_exhibition,name='corp_exhibition'),
    path('service/event',views.corp_event,name='corp_event'),

    path('gallery/',views.gallery,name='gallery'),
    
    path('career/',views.career,name='career'),
    path('contact/',views.contact,name='contact'),
]