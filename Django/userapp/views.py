from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from userapp.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from django.core.files.storage import default_storage
import json
from userapp.models import User
from rest_framework import viewsets
from rest_framework.decorators import action
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data)

    def update(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=204)
    @action(detail=False, methods=['post'])
    def get_all(self, request):
        products = User.objects.all()
        serializer = self.get_serializer(products, many=True)
        return Response(serializer.data)
  

"""def create(self, request):#post
    password = validated_data.pop('password', None)
    user = self.Meta.model(**validated_data)
    if password is not None:
        user.set_password(password)
    user.save()
    return user"""
