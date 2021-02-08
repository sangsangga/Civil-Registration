from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from .models import m_dukcaipil_data, t_dukcapil_check_result, m_religion, m_marital_status
from .serializers import m_dukcapil_dataSerializer, m_religion_serializer,m_marital_status_serializer

# Create your views here.
@api_view(["GET","POST"])
def check_nik(request,pk=None):
  print("masuk dukcapil")
  print(pk,"<<<pk")
  # if request.method == "GET":
  #   result = m_dukcaipil_data.objects.get(NIK=pk)
  #   print(result)
  #   print("after result")
  # elif request.method == "POST":
  #   pass

@api_view(["GET", "POST"])
def dukcapil(request, pk=None):
  if request.method == "GET":
    queryset = m_dukcaipil_data.objects.all()
    serializer = m_dukcapil_dataSerializer(queryset, many=True)
    return Response(serializer.data)
  elif request.method == "POST":
    serializer = m_dukcapil_dataSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
    return Response(serializer.data)
    
  

@api_view(["GET"])
def religion(request):
  print("masuk religions")
  if request.method == "GET":
    religions = m_religion.objects.all()
    print(religion, "<<religgions")
    serializer = m_religion_serializer(religions, many=True)
    print("serializer",serializer)
    return Response(serializer.data)


@api_view(["GET"])
def marital_status(request):
  if request.method == "GET":
    marital_status = m_marital_status.objects.all()
    serializer = m_marital_status_serializer(marital_status, many=True)
    return Response(serializer.data)
