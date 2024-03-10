from rest_framework import serializers
from .models import *

class PlacesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Places
        fields = ('id','name','province','country','latitude','longtitude','price')
