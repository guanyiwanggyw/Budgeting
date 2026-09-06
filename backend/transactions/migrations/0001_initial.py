from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Transaction",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date", models.DateField(verbose_name="")),
                ("type", models.CharField(max_length=8)),
                (
                    "amount",
                    models.DecimalField(decimal_places=2, max_digits=11),
                ),
                ("category", models.CharField(max_length=20)),
                ("sent_from", models.CharField(max_length=20)),
                ("sent_to", models.CharField(max_length=20)),
                ("note", models.CharField(max_length=100)),
                (
                    "account_holder",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="transactions",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={"db_table": "api_transaction"},
        ),
    ]