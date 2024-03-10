from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('places', PlacesViewset, basename='places')
urlpatterns = router.urls
