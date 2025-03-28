from rest_framework import serializers
from .models import *

class CorporateServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateServices
        fields = '__all__'

class CorporateServiceSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateServiceSubcategory
        fields = '__all__'

class CorporateServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateServiceImage
        fields = '__all__'

class SocialServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialServices
        fields = '__all__'

class SocialServiceSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialServiceSubcategory
        fields = '__all__'

class SocialServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialServiceImage
        fields = '__all__'

class EventServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventServices
        fields = '__all__'

class EventServiceSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventServiceSubcategory
        fields = '__all__'

class EventServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventServiceImage
        fields = '__all__'

class ExhibitionServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExhibitionServices
        fields = '__all__'

class ExhibitionServiceSubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ExhibitionServiceSubcategory
        fields = '__all__'

class ExhibitionServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExhibitionServiceImage
        fields = '__all__'
