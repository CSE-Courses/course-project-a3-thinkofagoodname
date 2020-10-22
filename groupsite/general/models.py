from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Each class is going to be its own table in the database
# Each attribute is going to be its own field in the database

class musicProject(models.Model):
    title = models.CharField(max_length=100)
    songFile = models.FileField(upload_to='songs/')
    owner = models.ForeignKey(User, on_delete=models.CASCADE) # If the user is deleted, their musical project is also deleted

    def __str__(self):
        return self.title
