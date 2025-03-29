from django.urls import path,include
from home import views
from rest_framework.routers import DefaultRouter
from .apiviews import *

app_name="home"


router = DefaultRouter()
router.register(r'corporate-services', CorporateServicesViewSet)
router.register(r'corporate-subcategories', CorporateServiceSubcategoryViewSet)
router.register(r'corporate-images', CorporateServiceImageViewSet)
router.register(r'social-services', SocialServicesViewSet)
router.register(r'social-subcategories', SocialServiceSubcategoryViewSet)
router.register(r'social-images', SocialServiceImageViewSet)
router.register(r'event-services', EventServicesViewSet)
router.register(r'event-subcategories', EventServiceSubcategoryViewSet)
router.register(r'event-images', EventServiceImageViewSet)
router.register(r'exhibition-services', ExhibitionServicesViewSet)
router.register(r'exhibition-subcategories', ExhibitionServiceSubcategoryViewSet)
router.register(r'exhibition-images', ExhibitionServiceImageViewSet)
router.register(r'career', CareerViewSet)
router.register(r'gallery', GalleryViewSet, basename='gallery')

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
    path('thank-you/', views.thank_you, name='application_thank_you'),
    path('contact/',views.contact,name='contact'),

    path('service/corporate/<int:id>',views.corp_service_byid,name='corp_service_byid'),
    path('service/social/<int:id>',views.corp_social_byid,name='corp_social_byid'),
    path('service/exhibition/<int:id>',views.corp_exhibition_byid,name='corp_exhibition_byid'),
    path('service/event/<int:id>',views.corp_event_byid,name='corp_event_byid'),

    path('api/', include(router.urls)),
    path('api/career/form', CareerAPIView.as_view(), name='career_api'),
    path('api/contact/', ContactView.as_view(), name='contact'),
    path('api/exhibition-quote/', ExhibitionQuoteView.as_view(), name='exhibition-quote'),
    path('api/event-quote/', EventQuoteView.as_view(), name='event-quote'),
]