from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Your Name'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Email Address'}))
    country = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Your Country'}))
    phone = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'placeholder': 'Phone Number'}))
    content = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Your Message'}))

from django import forms
from .models import Career, JobApplication

class JobApplicationForm(forms.ModelForm):
    class Meta:
        model = JobApplication
        fields = ['name', 'email', 'position', 'message']

    name = forms.CharField(
        max_length=255, 
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your name'})
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'})
    )
    position = forms.ModelChoiceField(
        queryset=Career.objects.all(),
        empty_label="Select a position", 
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    message = forms.CharField(
        widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Tell us about yourself', 'rows': 4})
    )
