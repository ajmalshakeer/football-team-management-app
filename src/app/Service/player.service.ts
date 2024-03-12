import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../general/Player';
import { Admin } from '../general/Admin';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerUrl = 'http://localhost:8080/team';
  private adminUrl = 'http://localhost:8080/admin';
  constructor(private http: HttpClient) {}

  

  getplayer(): Observable<any> {
    return this.http.get(`${this.playerUrl}/allplayers`);
  }

  getplayerbyid(id: number): Observable<any> {
    return this.http.get(`${this.playerUrl}/fetchplayer/${id}`);
  }

  addPlayer(player: Player): Observable<any> {
    return this.http.post(`${this.playerUrl}/addnewplayer`, player);
  }

  deleteplayer(id: number): Observable<any> {
    return this.http.delete(`${this.playerUrl}/deleteplayer/${id}`);
  }

  updateplayer(id: number, updatePlayerdata: Player): Observable<any> {
    return this.http.put(
      `${this.playerUrl}/updateplayer/${id}`,
      updatePlayerdata
    );
  }

  sample_test() {
    return 'Service method test';
  }


  verifyAdmin(adminName: string, password: string): Observable<any> {
    const admin = { adminName, password };
    return this.http.post(`${this.adminUrl}/login`, admin);
  }


  getAdmin(): Observable<any> {
    return this.http.get(`${this.adminUrl}/alladmins`);
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.adminUrl}/fetchadmin/${id}`);
  }

  addAdmin(admin : Admin):Observable<any>{
  return this.http.post(`${this.adminUrl}/addnewadmin`, admin);
  }

  deleteAdmin(id : number) : Observable<any>{
    return this.http.delete(`${this.adminUrl}/deleteadmin/${id}`);
  }

  updateAdmin(id : number , updateAdmindata : Admin): Observable<any>{
    return this.http.put(`${this.adminUrl}/updateadmin/${id}`, updateAdmindata);
  }
  
}
