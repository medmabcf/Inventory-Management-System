from rest_framework import serializers
from .models import Category, Product, PurchaseOrder, SellOrder

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_id', 'name', 'description', 'price', 'category']

class PurchaseOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrder
        fields = ['order_id', 'product', 'customer', 'purchase_date', 'purchase_time', 'total_price', 'total_qt']

class SellOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellOrder
        fields = ['order_id', 'product', 'supplier', 'purchase_date', 'purchase_time', 'total_price', 'total_qt']