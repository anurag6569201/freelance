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


class CareerViewSet(viewsets.ModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer


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
    

import json
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .models import Career
from .forms import JobApplicationForm
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
@method_decorator(csrf_exempt, name='dispatch')
class CareerAPIView(View):
    def post(self, request, *args, **kwargs):
        # Handle both JSON and form-data
        if request.content_type == 'application/json':
            try:
                data = json.loads(request.body)
                form = JobApplicationForm(data)
            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid JSON'}, status=400)
        else:
            # Handle regular form data (including files)
            form = JobApplicationForm(request.POST, request.FILES)
        
        if form.is_valid():
            application = form.save()
            
            # Extract the cleaned data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            position = form.cleaned_data['position']
            message = form.cleaned_data['message']
            
            # Render email template
            html_message = render_to_string('pages/career/components/email.html', {
                'name': name,
                'email': email,
                'position': position,
                'message': message,
            })
            
            # Send email
            send_mail(
                subject=f'New Job Application for {position}',
                message='You have received a new job application.',
                from_email=email,
                recipient_list=['anurag6569201@gmail.com'],
                html_message=html_message
            )
            
            return JsonResponse({
                'message': 'Application submitted successfully',
                'id': application.id
            }, status=201)
        
        return JsonResponse({'errors': form.errors}, status=400)
    


from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Contact
from .serializers import ContactSerializer
import random
import string
from datetime import datetime

class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        
        if serializer.is_valid():
            # Save the contact with user-provided meeting link
            contact = serializer.save()
            
            response_data = {
                'success': True,
                'message': 'Meeting scheduled successfully! Emails have been sent.',
                'meeting_link': contact.meeting_link
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ExhibitionQuoteView(APIView):
    def post(self, request):
        serializer = ExhibitionQuoteSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({
                'success': True,
                'message': 'Quote request submitted successfully!',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EventQuoteView(APIView):
    def post(self, request):
        serializer = EventQuoteSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({
                'success': True,
                'message': 'Event quote request submitted successfully!',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)