from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from mechanics.views import MechanicViewSet
from bookings.views import BookingViewSet
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()
router.register("mechanics", MechanicViewSet)
router.register("bookings", BookingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path("admin/", admin.site.urls),
    path("auth/", include("accounts.urls")),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('api/accounts/', include('accounts.urls')),
]


