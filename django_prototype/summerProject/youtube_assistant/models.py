from django.db import models

# Create your models here.
class Message(models.Model):
    origin = models.CharField(max_length=48)
    text = models.TextField()
    
    def __str__(self):
        return f'This is a message by "{self.origin}", text starting with" {self.text[:10]}."'