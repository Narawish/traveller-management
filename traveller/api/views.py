from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import Places
from .serializers import *
from rest_framework.response import Response


# Create your views here.
def home(request):
    return HttpResponse("This is the homepage of api ")

class PlacesViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = Places.objects.all()
    serializer_class = PlacesSerializers

    def list(self, request):
        queryset = Places.objects.all()
        serializer = self.serializer_class(queryset,many=True)
        return Response(serializer.data)
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
    def retrieve(self, request, pk=None):
        places = self.queryset.get(pk=pk)
        serializers = self.serializer_class(places)
        return Response(serializers.data)

    def update(self, request, pk=None):
        places = self.queryset.get(pk=pk)
        serializer = self.serializer_class(places, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
    def destroy(self, request, pk=None):
        places = self.queryset.get(pk=pk)
        places.delete()
        return Response(status=204)