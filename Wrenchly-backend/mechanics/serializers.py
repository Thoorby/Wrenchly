from rest_framework import serializers
from .models import MechanicProfile

class MechanicSerializer(serializers.ModelSerializer):
    class Meta:
        model = MechanicProfile
        fields = "__all__"
