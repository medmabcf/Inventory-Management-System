from rest_framework import serializers
#from django.contrib.auth import get_user_model
from userapp.models import User
#User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    is_superuser = serializers.BooleanField(write_only=True, required=False)

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}
   
    def create(self, validated_data):
        
        password = validated_data.pop('password', None)
        is_superuser = validated_data.pop('is_superuser', False)
        
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        if is_superuser:
            user.is_staff = True
            user.is_superuser = True
        user.save()
        return user
