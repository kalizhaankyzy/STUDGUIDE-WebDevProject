from rest_framework import serializers

from .models import Author, Category, Course, CourseLevel, News


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
        fields = ('id', 'name', 'rate', 'level', 'price', 'description', 'level_id',)