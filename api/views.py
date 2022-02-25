from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import GameSerializer
from .models import Game


class GetGame(APIView):
    serializer_class = GameSerializer

    def get(self, request, pk):
        game = Game.objects.filter(pk=pk)
        if len(game) > 0:
            data = GameSerializer(game[0]).data
            return Response(data, status=status.HTTP_200_OK)
        return Response(
            {"Room Not Found": "Invalid Game ID."},
            status=status.HTTP_404_NOT_FOUND,
        )
