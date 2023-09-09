from django.contrib import admin
from django.http.request import HttpRequest
from Store.models import Product,Category,order

@admin.register(Product)
class ProductAdmin( admin.ModelAdmin):
    list_display=["name","description","special","get_price"]
    list_filter=["special"]
    def get_price(self,obj):
        return f"{obj.price}تومان"
    get_price.short_description="قیمت محصول"
    readonly_fields=["selled_count"]
    
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(order)
class OrderAdmin(admin.ModelAdmin):
    def has_add_permission(self,request):
        return False
    