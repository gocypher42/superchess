import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GameBoardComponent } from "./components/game-board/game-board.component";
import { TilesComponent } from "./components/tiles/tiles.component";
import { TileItemComponent } from './components/tile-item/tile-item.component';

@NgModule({
  declarations: [AppComponent, GameBoardComponent, TilesComponent, TileItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
