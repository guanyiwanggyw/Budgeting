from django.db import models
from django.contrib.auth.models import User

class Account(models.Model):
    name = models.CharField(max_length=100)
    balance = models.DecimalField(max_digits=11, decimal_places=2)
    account_holder = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="accounts" 
    )

    class Meta:
            db_table = "api_account"
            constraints = [
            models.UniqueConstraint(
                fields=["name", "account_holder"],
                name="unique_account_name_per_holder"
            )
        ]
    def __str__(self):
        return self.name