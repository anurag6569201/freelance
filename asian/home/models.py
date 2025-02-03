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


class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    country=models.CharField(max_length=100)
    phone=models.CharField(max_length=100)
    message=models.TextField()

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