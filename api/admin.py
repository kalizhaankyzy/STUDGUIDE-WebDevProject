from django.contrib import admin
from .models import Author, Category, Course, CourseLevel, News
# Register your models here.
admin.site.register(Category)
admin.site.register(Author)
admin.site.register(News)
admin.site.register(CourseLevel)
admin.site.register(Course)