from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
    date = models.DateField((""), auto_now=False, auto_now_add=False)
    type = models.CharField(max_length=8) 
    amount = models.DecimalField(max_digits=11, decimal_places=2)
    category = models.CharField(max_length=20) 
    sent_from = models.CharField(max_length=20)
    sent_to = models.CharField(max_length=20)
    note = models.CharField(max_length=100)
    account_holder =  models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="transactions" 
    )

    class Meta:
        db_table = "api_transaction"

