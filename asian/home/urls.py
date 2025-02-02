from django.urls import path
from home import views

app_name="home"

urlpatterns=[
    path('',views.home,name='home'),
    path('about/',views.about,name='about'),
    path('about/team/',views.team,name='team'),

    path('service/corporate',views.corp_service,name='corp_service'),
    path('service/social',views.corp_social,name='corp_social'),
]