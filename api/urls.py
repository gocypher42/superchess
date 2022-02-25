from django.urls import path

from . import views

urlpatterns = [path("game/<int:pk>", views.GetGame.as_view())]
