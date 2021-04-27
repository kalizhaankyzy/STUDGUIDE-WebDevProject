from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from .views import UserViewSet, author_detail, author_list, category_list, category_detail, category_news, course_detail, course_list, level_detail, level_list, news_detail, news_list, review_list

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('authors/', author_list.as_view()),
    path('authors/<int:author_id>/', author_detail.as_view()),
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_detail),
    path('categories/<int:category_id>/news/', category_news),
    path('news/', news_list.as_view()),
    path('news/<int:news_id>', news_detail.as_view()),
    path('login/', obtain_jwt_token),
    path('course_levels/', level_list),
    path('course_levels/<int:level_id>/', level_detail),
    path('courses/', course_list),
    path('courses/<int:course_id>/', course_detail),
    path('reviews/', review_list.as_view()),
]