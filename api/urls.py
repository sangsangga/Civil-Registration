
from django.urls import path,include
from .views import dukcapil,check_nik,religion, marital_status


urlpatterns = [
    path('dukcapil/',dukcapil,name="api_dukcapil"),
    path('religions/',religion,name="api_religion"),
    path('maritalStatus/',marital_status,name="api_marital_status"),
    path('',check_nik, name="POST_NIK"),
    path('<str:pk>/',check_nik, name="GET_NIK"),
]