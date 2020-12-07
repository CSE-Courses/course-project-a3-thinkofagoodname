from django.db import models
from django.contrib.auth.models import User

from django.shortcuts import redirect
# Create your models here.
# Each class is going to be its own table in the database
# Each attribute is going to be its own field in the database

class musicProject(models.Model):
    title = models.CharField(max_length=100)
    songFile = models.FileField(upload_to='songs/', default='songs/moonlight.mp3')
    owner = models.ForeignKey(User, on_delete=models.CASCADE) # If the user is deleted, their musical project is also deleted

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return '/profile/' # Will send the user to this url after the creation of a new musical project

class recording(models.Model):
    title = models.CharField(max_length=100)
    audioFile = models.FileField(upload_to='recordings/')
    project_name = models.ForeignKey(musicProject, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
