from rest_framework import serializers
from .models import m_dukcaipil_data,m_religion,m_marital_status

class m_dukcapil_dataSerializer(serializers.ModelSerializer):
  class Meta:
    model = m_dukcaipil_data
    fields='__all__'

class m_religion_serializer(serializers.ModelSerializer):
  class Meta:
    model = m_religion
    fields='__all__'

class m_marital_status_serializer(serializers.ModelSerializer):
  class Meta:
    model = m_marital_status
    fields='__all__'
    


 