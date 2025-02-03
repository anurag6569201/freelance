from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import (
    CorporateServices, CorporateServiceSubcategory, CorporateServiceImage,
    SocialServices, SocialServiceSubcategory, SocialServiceImage,
    EventServices, EventServiceSubcategory, EventServiceImage,
    ExhibitionServices, ExhibitionServiceSubcategory, ExhibitionServiceImage,
    Career,JobApplication,Contact,Testimonials
)

# Inlines for Images and Subcategories
class CorporateServiceImageInline(admin.TabularInline):
    model = CorporateServiceImage
    extra = 1

class CorporateServiceSubcategoryInline(admin.TabularInline):
    model = CorporateServiceSubcategory
    extra = 1

class SocialServiceImageInline(admin.TabularInline):
    model = SocialServiceImage
    extra = 1

class SocialServiceSubcategoryInline(admin.TabularInline):
    model = SocialServiceSubcategory
    extra = 1

class EventServiceImageInline(admin.TabularInline):
    model = EventServiceImage
    extra = 1

class EventServiceSubcategoryInline(admin.TabularInline):
    model = EventServiceSubcategory
    extra = 1

class ExhibitionServiceImageInline(admin.TabularInline):
    model = ExhibitionServiceImage
    extra = 1

class ExhibitionServiceSubcategoryInline(admin.TabularInline):
    model = ExhibitionServiceSubcategory
    extra = 1

# Admin for Main Services
class CorporateServicesAdmin(ImportExportModelAdmin):
    inlines = [CorporateServiceSubcategoryInline, CorporateServiceImageInline]

class SocialServicesAdmin(ImportExportModelAdmin):
    inlines = [SocialServiceSubcategoryInline, SocialServiceImageInline]

class EventServicesAdmin(ImportExportModelAdmin):
    inlines = [EventServiceSubcategoryInline, EventServiceImageInline]

class ExhibitionServicesAdmin(ImportExportModelAdmin):
    inlines = [ExhibitionServiceSubcategoryInline, ExhibitionServiceImageInline]

# Register Models
admin.site.register(CorporateServices, CorporateServicesAdmin)
admin.site.register(SocialServices, SocialServicesAdmin)
admin.site.register(EventServices, EventServicesAdmin)
admin.site.register(ExhibitionServices, ExhibitionServicesAdmin)
admin.site.register(Career, ImportExportModelAdmin)

admin.site.register(Contact,ImportExportModelAdmin)
admin.site.register(JobApplication,ImportExportModelAdmin)
admin.site.register(Testimonials,ImportExportModelAdmin)