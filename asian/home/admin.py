from django.contrib import admin
from home import models
from import_export.admin import ImportExportModelAdmin


admin.site.register(models.CorporateSerices,ImportExportModelAdmin)
admin.site.register(models.SocialSerices,ImportExportModelAdmin)
admin.site.register(models.ExhibitionSerices,ImportExportModelAdmin)
admin.site.register(models.EventSerices,ImportExportModelAdmin)
