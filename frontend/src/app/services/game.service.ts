import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../Game";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private apiUrl = "http://127.0.0.1:8000/api/game/1";

  constructor(private http: HttpClient) {}

  getGame(): Observable<Game> {
    return this.http.get<Game>(this.apiUrl);
  }
}
