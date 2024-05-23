from django.urls import path
from core import views

app_name='core'

urlpatterns=[
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('advertise/',views.advertise,name='advertise'),
    path('privacy/',views.privacy,name='privacy'),

    # functionality urls
    path('upload_success/', views.upload_success, name='upload_success'),
]