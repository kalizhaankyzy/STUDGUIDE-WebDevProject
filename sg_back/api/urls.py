from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.urlpatterns import format_suffix_patterns

from .views import author_detail, author_list, category_list, category_detail, category_news, news_detail, news_list
urlpatterns = [
    path('authors/', author_list.as_view()),
    path('authors/<int:author_id>/', author_detail.as_view()),
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_detail),
    path('categories/<int:category_id>/news/', category_news),
    path('news/', news_list.as_view()),
    path('news/<int:news_id>', news_detail.as_view()),
    path('login/', obtain_jwt_token),
]