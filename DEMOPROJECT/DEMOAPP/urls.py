from django.urls import path
from . import views

urlpatterns = [
    path('', views.hi, name='hi'),
    path('about/', views.about, name='about'),
    path('aprasymas/', views.aprasymas, name='aprasymas')
]