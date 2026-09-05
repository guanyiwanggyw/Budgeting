from django.urls import path, include
from . import views

urlpatterns = [
    path("accounts/", views.AccountListCreate.as_view(), name="account-list"),
    path("accounts/delete/<int:pk>/", views.AccountDelete.as_view(), name="delete-account"),
]
