from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.CreateModel(
                    name="Account",
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
                        ("name", models.CharField(max_length=100)),
                        (
                            "balance",
                            models.DecimalField(decimal_places=2, max_digits=11),
                        ),
                        (
                            "account_holder",
                            models.ForeignKey(
                                on_delete=django.db.models.deletion.CASCADE,
                                related_name="accounts",
                                to=settings.AUTH_USER_MODEL,
                            ),
                        ),
                    ],
                    options={
                        "db_table": "api_account",
                        "constraints": [
                            models.UniqueConstraint(
                                fields=("name", "account_holder"),
                                name="unique_account_name_per_holder",
                            ),
                        ],
                    },
                ),
            ],
        ),
    ]