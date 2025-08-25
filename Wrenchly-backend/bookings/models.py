from django.db import models
from django.contrib.auth.models import User
from mechanics.models import MechanicProfile

class Booking(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookings")
    mechanic = models.ForeignKey(MechanicProfile, on_delete=models.CASCADE, related_name="bookings")
    issue_description = models.TextField()
    status = models.CharField(max_length=20, choices=[
        ("pending", "Pending"),
        ("confirmed", "Confirmed"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    ], default="pending")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking by {self.customer.username} with {self.mechanic.user.username}"
