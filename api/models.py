from django.db import models

# Create your models here.
class m_religion(models.Model):
  religion_name = models.CharField(max_length= 20)
  
  def __str__(self):
    return self.religion_name
  

class m_marital_status(models.Model):
  single="Single"
  widower = "Widower"
  widow = "Widow"
  married = "Married"

  marital_status_choices = [
    (single,"Single"),
    (widower,"Widower"),
    (widow,"Widow"),
    (married,"Married"),
  ]

  marital_status_desc = models.CharField(max_length=10, choices=marital_status_choices)

  def __str__(self):
    return self.marital_status_desc
  

class t_dukcapil_check_result(models.Model):
  check_status_choices = [
    ("found", "Found"),
    ("not found", "Not Found")
  ]

  NIK = models.CharField(max_length=30)
  check_status = models.CharField(max_length=10, choices=check_status_choices)

class m_dukcaipil_data(models.Model):
  female = "F"
  male = "M"
  gender_choices = [
    (male, "Male"),
    (female, "Female")
  ]

  NIK = models.CharField(max_length=30, unique=True)
  name = models.CharField(max_length= 50)
  maiden_name = models.CharField(max_length=15)
  birth_date = models.DateField(auto_now=False, auto_now_add=False, auto_created=False)
  gender = models.CharField(choices=gender_choices, max_length=1)
  marital_status_id = models.ForeignKey(m_marital_status, on_delete = models.CASCADE) 
  religion_id = models.ForeignKey(m_religion, on_delete=models.CASCADE)

  

