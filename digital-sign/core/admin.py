from django.contrib import admin
from .models import UploadedFile, UploadBatch

@admin.register(UploadedFile)
class UploadedFileAdmin(admin.ModelAdmin):
    list_display = ('file', 'signed_file', 'uploaded_at')
    search_fields = ('file',)
    list_filter = ('uploaded_at',)

@admin.register(UploadBatch)
class UploadBatchAdmin(admin.ModelAdmin):
    list_display = ('url', 'signing_reason', 'visible_signature', 'split_large_files')
    search_fields = ('signing_reason',)
    list_filter = ('visible_signature', 'split_large_files')
