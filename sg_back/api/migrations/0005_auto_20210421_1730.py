# Generated by Django 2.2.19 on 2021-04-21 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_course_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='rate',
            field=models.FloatField(),
        ),
    ]
