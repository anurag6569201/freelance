from django.db import models

# CORPORATE SERVICES
class CorporateServices(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CorporateServiceSubcategory(models.Model):
    service = models.ForeignKey(CorporateServices, on_delete=models.CASCADE, related_name='subcategories', blank=True, null=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.service.name} - {self.name}"

class CorporateServiceImage(models.Model):
    service = models.ForeignKey(CorporateServices, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    subcategory = models.ForeignKey(CorporateServiceSubcategory, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    image = models.ImageField(upload_to='corporate/')

    def __str__(self):
        if self.subcategory:
            return f"Image for {self.subcategory.name} ({self.subcategory.service.name})"
        return f"Image for {self.service.name}"


# SOCIAL SERVICES
class SocialServices(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class SocialServiceSubcategory(models.Model):
    service = models.ForeignKey(SocialServices, on_delete=models.CASCADE, related_name='subcategories', blank=True, null=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.service.name} - {self.name}"

class SocialServiceImage(models.Model):
    service = models.ForeignKey(SocialServices, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    subcategory = models.ForeignKey(SocialServiceSubcategory, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    image = models.ImageField(upload_to='social/')

    def __str__(self):
        if self.subcategory:
            return f"Image for {self.subcategory.name} ({self.subcategory.service.name})"
        return f"Image for {self.service.name}"


# EVENT SERVICES
class EventServices(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class EventServiceSubcategory(models.Model):
    service = models.ForeignKey(EventServices, on_delete=models.CASCADE, related_name='subcategories', blank=True, null=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.service.name} - {self.name}"

class EventServiceImage(models.Model):
    service = models.ForeignKey(EventServices, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    subcategory = models.ForeignKey(EventServiceSubcategory, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    image = models.ImageField(upload_to='event/')

    def __str__(self):
        if self.subcategory:
            return f"Image for {self.subcategory.name} ({self.subcategory.service.name})"
        return f"Image for {self.service.name}"


# EXHIBITION SERVICES
class ExhibitionServices(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class ExhibitionServiceSubcategory(models.Model):
    service = models.ForeignKey(ExhibitionServices, on_delete=models.CASCADE, related_name='subcategories', blank=True, null=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.service.name} - {self.name}"

class ExhibitionServiceImage(models.Model):
    service = models.ForeignKey(ExhibitionServices, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    subcategory = models.ForeignKey(ExhibitionServiceSubcategory, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    image = models.ImageField(upload_to='exhibition/')

    def __str__(self):
        if self.subcategory:
            return f"Image for {self.subcategory.name} ({self.subcategory.service.name})"
        return f"Image for {self.service.name}"




class Career(models.Model):
    topic=models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    paragraph = models.CharField(max_length=200)
    def __str__(self):
        return self.topic 


from django.db import models
from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    country = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    message = models.TextField()
    meeting_date = models.DateField()
    meeting_time = models.TimeField()
    meeting_link = models.URLField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.name} - {self.meeting_date}"

    def save(self, *args, **kwargs):
        # Send confirmation emails when a new meeting is scheduled
        if not self.pk and self.meeting_link:  # Only for new instances with meeting link
            self.send_confirmation_emails()
        super().save(*args, **kwargs)

    def send_confirmation_emails(self):
        # Email to user
        user_subject = f"Meeting Scheduled with Asian Adept on {self.meeting_date}"
        user_message = f"""
        Hello {self.name},
        
        Thank you for scheduling a meeting with us.
        
        Meeting Details:
        Date: {self.meeting_date}
        Time: {self.meeting_time}
        Google Meet Link: {self.meeting_link}
        
        We look forward to connecting with you!
        
        Best regards,
        Asian Adept Team
        """
        send_mail(
            user_subject,
            user_message,
            settings.DEFAULT_FROM_EMAIL,
            [self.email],
            fail_silently=False,
        )

        # Email to admin
        admin_subject = f"New Meeting Scheduled: {self.name} on {self.meeting_date}"
        admin_message = f"""
        New meeting scheduled:
        
        Name: {self.name}
        Email: {self.email}
        Phone: {self.phone}
        Country: {self.country}
        
        Meeting Details:
        Date: {self.meeting_date}
        Time: {self.meeting_time}
        Google Meet Link: {self.meeting_link}
        
        Message:
        {self.message}
        """
        send_mail(
            admin_subject,
            admin_message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.ADMIN_EMAIL],
            fail_silently=False,
        )

class JobApplication(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    position = models.ForeignKey(Career, on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self):
        return f'{self.name} - {self.position}'


class Testimonials(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    review = models.TextField()




class ExhibitionQuote(models.Model):
    country = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    tel_number = models.CharField(max_length=20)
    office_tel_number = models.CharField(max_length=20, blank=True, null=True)
    interest_show = models.CharField(max_length=200)
    dates = models.CharField(max_length=100, blank=True, null=True)
    booth_requirements = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.interest_show}"
    

class EventQuote(models.Model):
    company = models.CharField(max_length=200)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    tel_number = models.CharField(max_length=20)
    company_tel_number = models.CharField(max_length=20, blank=True, null=True)
    company_address = models.TextField()
    event_explanation = models.TextField()
    event_dates = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.company} - {self.name}"