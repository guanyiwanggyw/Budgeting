from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
    date = models.DateField((""), auto_now=False, auto_now_add=False)
    type = models.CharField(max_length=8) # Income, Expense, Transfer
    amount = models.DecimalField(max_digits=11, decimal_places=2)
    category = models.CharField(max_length=20) 
    sent_from = models.CharField(max_length=20)
    sent_to = models.CharField(max_length=20)
    note = models.CharField(max_length=100)
    account_holder =  models.ForeignKey(
        User,
        on_delete=models.CASCADE, # Deletes all accounts made by account_holder if account_holder is deleted
        related_name="transactions" # Names the group of accounts made by the same account_holder
    )

class Account(models.Model):
    name = models.CharField(max_length=100)
    balance = models.DecimalField(max_digits=11, decimal_places=2)
    account_holder = models.ForeignKey(
        User,
        on_delete=models.CASCADE, # Deletes all accounts made by account_holder if account_holder is deleted
        related_name="accounts" # Names the group of accounts made by the same account_holder
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["name", "account_holder"],
                name="unique_account_name_per_holder"
            )
        ]
    def __str__(self):
        return self.name