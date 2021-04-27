from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Author, Category, Course, CourseLevel, News, Review


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance

class CourseLevelSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        level = CourseLevel.objects.create(name=validated_data['name'])
        return level

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'name', 'surname', 'email')

class NewsSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only = True)
    category_id = serializers.IntegerField(write_only=True)
    author = AuthorSerializer(read_only = True)
    author_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = News
        fields = ('id', 'title', 'text', 'description', 'category', 'category_id', 'author', 'author_id',)

class CourseSerializer(serializers.ModelSerializer):
    level = CourseLevelSerializer(read_only = True)
    level_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Course
        fields = ('id', 'name', 'rate', 'level', 'price', 'description', 'level_id', 'url', )

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'sender', 'text',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password']
        extra_kwargs = {'password' : {'write_only':True, 'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user