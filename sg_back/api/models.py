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
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)