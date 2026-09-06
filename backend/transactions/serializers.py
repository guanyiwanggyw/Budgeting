from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            "id", "date", "type",
            "amount", "category", "sent_from", 
            "sent_to", "note", "account_holder"
            ]
        extra_kwargs = {"account_holder": {"read_only": True}}