from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Account, Transaction

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["id", "name", "balance", "account_holder"]
        extra_kwargs = {"account_holder": {"read_only": True}}

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            "id", "date", "type",
            "amount", "category", "sent_from", 
            "sent_to", "note", "account_holder"
            ]
        extra_kwargs = {"account_holder": {"read_only": True}}