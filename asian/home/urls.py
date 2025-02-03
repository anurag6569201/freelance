from django.urls import path
from home import views

app_name="home"

urlpatterns=[
    path('',views.home,name='home'),
    path('about/',views.about,name='about'),
    path('about/team/',views.team,name='team'),

    path('service/corporate/',views.corp_service,name='corp_service'),
    path('service/social/',views.corp_social,name='corp_social'),
    path('service/exhibition/',views.corp_exhibition,name='corp_exhibition'),
    path('service/event/',views.corp_event,name='corp_event'),

    path('gallery/',views.gallery,name='gallery'),
    
    path('career/',views.career,name='career'),
    path('contact/',views.contact,name='contact'),

    path('service/corporate/<int:id>',views.corp_service_byid,name='corp_service_byid'),
    path('service/social/<int:id>',views.corp_social_byid,name='corp_social_byid'),
    path('service/exhibition/<int:id>',views.corp_exhibition_byid,name='corp_exhibition_byid'),
    path('service/event/<int:id>',views.corp_event_byid,name='corp_event_byid'),
]