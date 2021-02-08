from django.contrib import admin

# Register your models here.
from .models import m_dukcaipil_data, m_religion, m_marital_status


admin.site.register(m_religion)
admin.site.register(m_marital_status)
admin.site.register(m_dukcaipil_data)
