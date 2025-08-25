# accounts/urls.py
from django.urls import path
from .views import SignupView, LoginView, CurrentUserView, ProtectedView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("me/", CurrentUserView.as_view(), name="current_user"),
    path("protected/", ProtectedView.as_view(), name="protected"),
]
