from rest_framework import serializers
from Store.models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=["name", "images"]

class ProductSerializer(serializers.ModelSerializer):
    Category=CategorySerializer()
    class Meta:
        model= Product
        fields="__all__"