from django.db import models
from userapp.models import User

class Category(models.Model):
    category_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255,unique=True)
    #products = models.ManyToManyField('Product', related_name='categories')
  
    def __str__(self):
        return self.name
class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,unique=True)
    description = models.TextField(null=True)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    #sku = models.CharField(max_length=50, unique=True)
    #image = models.ImageField(upload_to='products/', null=True, blank=True)
      
    def __str__(self):
        return self.name


    
class PurchaseOrder(models.Model):
    #products = models.ManyToManyField(Product)
    purchaseorder_id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    purchase_date = models.DateField(auto_now_add=True)
    purchase_time = models.TimeField(auto_now_add=True) 
    total_price = models.FloatField()
    total_qt= models.IntegerField()

    def __str__(self):
        return f"{self.customer_name} - {self.order_date}"
class SellOrder(models.Model):
    #products = models.ManyToManyField(Product)
    sellsorder_id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    supplier = models.ForeignKey(User, on_delete=models.CASCADE)
    purchase_date = models.DateField(auto_now_add=True)
    purchase_time = models.TimeField(auto_now_add=True) 
    total_price = models.FloatField()
    total_qt= models.IntegerField()

    def __str__(self):
        return f"{self.customer_name} - {self.order_date}"



    



"""class Purchase(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    purchase_date = models.DateField(auto_now_add=True)
    purchase_time = models.TimeField(auto_now_add=True)
    #purchase_timezone = TimeZoneField()/from timezone_field import TimeZoneField/instal it 
    #purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f"{self.product} - {self.purchase_time} ({self.purchase_timezone})"
"""
