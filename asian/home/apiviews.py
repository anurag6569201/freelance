from rest_framework import viewsets
from rest_framework.response import Response
from .models import *
from .serializers import *

class CorporateServicesViewSet(viewsets.ModelViewSet):
    queryset = CorporateServices.objects.all()
    serializer_class = CorporateServicesSerializer

class CorporateServiceSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = CorporateServiceSubcategory.objects.all()
    serializer_class = CorporateServiceSubcategorySerializer

class CorporateServiceImageViewSet(viewsets.ModelViewSet):
    queryset = CorporateServiceImage.objects.all()
    serializer_class = CorporateServiceImageSerializer

class SocialServicesViewSet(viewsets.ModelViewSet):
    queryset = SocialServices.objects.all()
    serializer_class = SocialServicesSerializer

class SocialServiceSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = SocialServiceSubcategory.objects.all()
    serializer_class = SocialServiceSubcategorySerializer

class SocialServiceImageViewSet(viewsets.ModelViewSet):
    queryset = SocialServiceImage.objects.all()
    serializer_class = SocialServiceImageSerializer

class EventServicesViewSet(viewsets.ModelViewSet):
    queryset = EventServices.objects.all()
    serializer_class = EventServicesSerializer

class EventServiceSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = EventServiceSubcategory.objects.all()
    serializer_class = EventServiceSubcategorySerializer

class EventServiceImageViewSet(viewsets.ModelViewSet):
    queryset = EventServiceImage.objects.all()
    serializer_class = EventServiceImageSerializer

class ExhibitionServicesViewSet(viewsets.ModelViewSet):
    queryset = ExhibitionServices.objects.all()
    serializer_class = ExhibitionServicesSerializer

class ExhibitionServiceSubcategoryViewSet(viewsets.ModelViewSet):
    queryset = ExhibitionServiceSubcategory.objects.all()
    serializer_class = ExhibitionServiceSubcategorySerializer

class ExhibitionServiceImageViewSet(viewsets.ModelViewSet):
    queryset = ExhibitionServiceImage.objects.all()
    serializer_class = ExhibitionServiceImageSerializer


class GalleryViewSet(viewsets.ViewSet):
    def list(self, request):
        active_filter = request.GET.get('filter', 'all')
        
        data = {}
        
        if active_filter in ['all', 'corporate']:
            data['corporate_images'] = CorporateServiceImageSerializer(CorporateServiceImage.objects.all(), many=True).data
        if active_filter in ['all', 'social']:
            data['social_images'] = SocialServiceImageSerializer(SocialServiceImage.objects.all(), many=True).data
        if active_filter in ['all', 'event']:
            data['event_images'] = EventServiceImageSerializer(EventServiceImage.objects.all(), many=True).data
        if active_filter in ['all', 'exhibition']:
            data['exhibition_images'] = ExhibitionServiceImageSerializer(ExhibitionServiceImage.objects.all(), many=True).data
        
        return Response(data)