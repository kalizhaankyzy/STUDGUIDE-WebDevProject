from rest_framework.decorators import api_view

from django.shortcuts import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from rest_framework.response import Response
from .models import Author, Category, News
from .serializers import AuthorSerializer, CategorySerializer, NewsSerializer
# Create your views here.
# def authors_list(request):

@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return Response({'message': 'deleted'}, status=204)

@api_view(['GET', 'PUT', 'DELETE'])
def category_news(request, category_id):
    try:
        news = Category.objects.get(id=category_id).news.all()
    except Category.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)
    if request.method == 'GET':
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

class author_list(APIView):
    def get(self, request):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class author_detail(APIView):
    def get_object(self, author_id):
        try:
            return Author.objects.get(id=author_id)
        except Author.DoesNotExist as e:
            raise Http404

    def get(self, request, author_id=None):
        author = self.get_object(author_id)
        serializer = AuthorSerializer(author)
        return Response(serializer.data)

    def put(self, request, author_id=None):
        author = self.get_object(author_id)
        serializer = AuthorSerializer(instance=author, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, author_id=None):
        author = self.get_object(author_id)
        author.delete()
        return Response({'message': 'deleted'}, status=204)

class news_list(APIView):
    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class news_detail(APIView):
    def get_object(self, news_id):
        try:
            return News.objects.get(id=news_id)
        except Author.DoesNotExist as e:
            raise Http404

    def get(self, request, news_id=None):
        news = self.get_object(news_id)
        serializer = NewsSerializer(news)
        return Response(serializer.data)

    def put(self, request, news_id=None):
        news = self.get_object(news_id)
        serializer = NewsSerializer(instance=news, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, news_id=None):
        news = self.get_object(news_id)
        news.delete()
        return Response({'message': 'deleted'}, status=204)