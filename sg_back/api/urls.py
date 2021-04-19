from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.urlpatterns import format_suffix_patterns

from .views import author_list, category_list, news_list
urlpatterns = [
    path('authors/', author_list.as_view()),
    path('categories/', category_list),
    path('news/', news_list.as_view()),
    
]