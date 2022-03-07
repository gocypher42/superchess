import math

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from html5lib import serialize
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Game
from .serializers import GameSerializer


class Tile:
    def __init__(self, class_name, img):
        self.class_name = class_name
        self.img = img


def index(request):
    return render(request, "chess/index.html")


class GetGame(APIView):
    serializer_class = GameSerializer
    lookup_url_kwarg = "id"

    def get(self, request, format=None):
        pk = request.GET.get(self.lookup_url_kwarg)
        print(pk)
        if id is not None:
            game = Game.objects.filter(pk=pk)
            print(game)
            if len(game) > 0:
                data = GameSerializer(game[0]).data
                print(data)
                return Response(data, status=status.HTTP_200_OK)
            return Response(
                {"Game Not Found": "Invalid Game id."},
                status=status.HTTP_404_NOT_FOUND,
            )
        return Response(
            {"Bad Request": "id parameter not found in request."},
            status=status.HTTP_400_BAD_REQUEST,
        )
