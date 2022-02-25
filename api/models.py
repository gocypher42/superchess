from django.db import models


class Game(models.Model):
    game_state = models.CharField(
        max_length=200,
        default="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    )
    start_date = models.DateTimeField()

    def __str__(self):
        return f"Game {self.id}"
