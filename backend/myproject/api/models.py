from django.db import models


# Create your models here.
class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.IntegerField()
    address = models.CharField(max_length=100)
