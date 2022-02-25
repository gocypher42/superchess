import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tile-item",
  templateUrl: "./tile-item.component.html",
  styleUrls: ["./tile-item.component.css"],
})
export class TileItemComponent implements OnInit {
  @Input() tile: any;

  constructor() {}

  ngOnInit(): void {}
}
