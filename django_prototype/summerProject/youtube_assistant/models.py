from django.db import models

# Create your models here.
class Message(models.Model):
    origin = models.CharField(max_length=48)
    text = models.TextField()