from django.urls import path

from . import views


app_name = "chess"
urlpatterns = [
    path("", views.index, name="index"),
    path("get-game", views.GetGame.as_view()),
]
