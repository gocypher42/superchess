import { Component, OnInit } from "@angular/core";

const colors = {
  light: "#ebecd0",
  dark: "#779556",
  selected: "#bacb2b;",
};

interface Tile {
  color: string;
  img: string;
}

@Component({
  selector: "app-tiles",
  templateUrl: "./tiles.component.html",
  styleUrls: ["./tiles.component.css"],
})
export class TilesComponent implements OnInit {
  tiles: Tile[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 64; i++) {
      this.tiles.push({ color: colors.light, img: "" });
    }
  }
}
