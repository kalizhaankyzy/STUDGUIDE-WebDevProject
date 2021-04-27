from django.db import models

# Create your models here.
class Category(models.Model):
    name=models.CharField(max_length=100)


class Author(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.CharField(max_length=100)

class News(models.Model):
    title = models.TextField(default='Title')
    description = models.TextField(default='missing news description')
    text = models.TextField(default='missing news details...')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='news')
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

class CourseLevel(models.Model):
    name = models.TextField(default="Beginner")

class Course(models.Model):
    name = models.TextField(null=False)
    rate = models.FloatField()
    level = models.ForeignKey(CourseLevel, on_delete=models.CASCADE, related_name="courses")
    price = models.FloatField()
    description = models.TextField(default="missing course description")
    url = models.TextField(default="#")

class Review(models.Model):
    sender = models.CharField(max_length=100)
    text = models.TextField(default="Excellent job!")
