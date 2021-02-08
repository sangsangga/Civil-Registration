# Generated by Django 3.1.6 on 2021-02-08 09:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='m_marital_status',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marital_status_desc', models.CharField(choices=[('Single', 'Single'), ('Widower', 'Widower'), ('Widow', 'Widow'), ('Married', 'Married')], max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='m_religion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('religion_name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='m_dukcaipil_data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('NIK', models.CharField(max_length=30, unique=True)),
                ('name', models.CharField(max_length=50)),
                ('maiden_name', models.CharField(max_length=15)),
                ('birth_date', models.DateField()),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('marital_status_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.m_marital_status')),
                ('religion_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.m_religion')),
            ],
        ),
    ]
