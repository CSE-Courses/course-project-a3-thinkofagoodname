from django.contrib import admin
from .models import musicProject
from .models import recording

# Register your models here.
admin.site.register(musicProject)
admin.site.register(recording)