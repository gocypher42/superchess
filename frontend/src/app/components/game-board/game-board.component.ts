import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services/game.service";
import { Game } from "../../Game";

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.css"],
})
export class GameBoardComponent implements OnInit {
  game: Game = { id: -1, game_state: "", start_date: "" };
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGame().subscribe((game) => {
      this.game = game;
    });
    setInterval(() => {
      this.gameService.getGame().subscribe((game) => {
        this.game = game;
      });
    }, 1 * 1000);
  }

  getGameState() {}
}
