import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Tile } from "../../Tile";

const colors = {
  light: "#ebecd0",
  dark: "#779556",
  selected: "#bacb2b;",
};

@Component({
  selector: "app-tiles",
  templateUrl: "./tiles.component.html",
  styleUrls: ["./tiles.component.css"],
})
export class TilesComponent implements OnInit {
  @Input() gameState: string = "";

  tiles: Tile[] = [];

  constructor() {}

  ngOnInit(): void {
    this.renderGameBoard();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === "gameState") {
        const changedProp = changes[propName];
        if (changedProp.previousValue != changedProp.currentValue) {
          this.renderGameBoard();
        }
      }
    }
  }

  renderGameBoard(): void {
    this.tiles = [];
    for (let i = 0; i < 64; i++) {
      let tile = {
        color: (i + Math.floor(i / 8)) % 2 ? colors.dark : colors.light,
        img: "",
        isSelected: false,
        isPreviousMoveFrom: false,
        isPreviousMoveTo: false,
      };

      this.tiles.push(tile);
    }

    let formatedGameState: string = this.gameState
      .split(" ")[0]
      .split("/")
      .join("");

    let k: number = 0;
    for (let i = 0; i < formatedGameState.length; i++) {
      let l = formatedGameState[i];

      if (!isNaN(parseInt(l))) {
        k += parseInt(l);
        continue;
      }

      let img = this.isLower(l) ? "b" : "w";

      this.tiles[k].img = `static/chess/images/${img}${l.toLowerCase()}.png`;
      k++;
    }
  }

  isLower(l: string): boolean {
    return l.toLowerCase() == l;
  }
}
