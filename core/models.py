from django.db import models

class UploadedFile(models.Model):
    file = models.FileField(upload_to='uploads/')
    signed_file = models.FileField(upload_to='signed_uploads/', blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name

class UploadBatch(models.Model):
    files = models.ManyToManyField(UploadedFile)
    url = models.URLField(blank=True, null=True)
    signing_reason = models.CharField(max_length=255)
    visible_signature = models.BooleanField(default=False)
    split_large_files = models.BooleanField(default=False)