# Generated by Django 3.1.6 on 2021-02-08 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='t_dukcapil_check_result',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('NIK', models.CharField(max_length=30)),
                ('check_status', models.CharField(choices=[('found', 'Found'), ('not found', 'Not Found')], max_length=10)),
            ],
        ),
    ]