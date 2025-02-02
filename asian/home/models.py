from django.db import models

class CorporateSerices(models.Model):
    name=models.CharField(max_length=100)

class SocialSerices(models.Model):
    name=models.CharField(max_length=100)

class EventSerices(models.Model):
    name=models.CharField(max_length=100)

class ExhibitionSerices(models.Model):
    name=models.CharField(max_length=100)