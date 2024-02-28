import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../general/Player';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private baseUrl = 'http://localhost:8080/team';
  constructor(private http: HttpClient) {}

  getplayer(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allplayers`);
  }

  getplayerbyid(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/fetchplayer/${id}`)
  }

  addPlayer(player: Player): Observable<any> {
    console.log(player);
    return this.http.post(`${this.baseUrl}/addnewplayer`, player);
  }

  deleteplayer(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteplayer/${id}`);
  }

  updateplayer(id:number,updatePlayerdata:Player) : Observable<any>{
    return this.http.put(`${this.baseUrl}/updateplayer/${id}`,updatePlayerdata);
  }

  sample_test() {
    return 'Service method test';
  }
}
