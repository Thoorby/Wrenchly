from rest_framework import viewsets
from .models import MechanicProfile
from .serializers import MechanicSerializer

class MechanicViewSet(viewsets.ModelViewSet):
    queryset = MechanicProfile.objects.all()
    serializer_class = MechanicSerializer
