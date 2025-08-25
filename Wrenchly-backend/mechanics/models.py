from django.db import models
from django.contrib.auth.models import User

class MechanicProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20)
    skills = models.TextField()
    rating = models.FloatField(default=0.0)
    available = models.BooleanField(default=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} - Mechanic"
