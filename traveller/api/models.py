from django.db import models

# Create your models here.
class Places(models.Model):
    name = models.CharField(max_length=200, unique=True)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    latitude = models.FloatField()
    longtitude = models.FloatField()
    price = models.FloatField(default=0)
    def __str__(self):
        return self.name
    
class Hotels(models.Model):
    name = models.CharField(max_length=200, unique=True)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    latitude = models.FloatField()
    longtitude = models.FloatField()
    price = models.FloatField(default=0)
    def __str__(self):
        return self.name

class Restaurant(models.Model):
    name = models.CharField(max_length=200, unique=True)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    latitude = models.FloatField()
    longtitude = models.FloatField()
    price = models.FloatField(default=0)
    def __str__(self):
        return self.name
    