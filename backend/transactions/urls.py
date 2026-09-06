from django.urls import path
from . import views

urlpatterns = [
    path("", views.TransactionListCreate.as_view(), name="transaction-list"),
    path("delete/<int:pk>/", views.TransactionDelete.as_view(), name="delete-transaction"),
]
