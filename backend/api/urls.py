from django.urls import path, include
from . import views

urlpatterns = [
    path("accounts/", views.AccountListCreate.as_view(), name="account-list"),
    path("accounts/delete/<int:pk>/", views.AccountDelete.as_view(), name="delete-account"),
    path("transactions/", views.TransactionListCreate.as_view(), name="transaction-list"),
    path("transactions/delete/<int:pk>/", views.TransactionDelete.as_view(), name="delete-transaction"),
]
