
from django.urls import include, re_path,path
from rest_framework import routers
from .views import ProductViewSet,CategoryViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]