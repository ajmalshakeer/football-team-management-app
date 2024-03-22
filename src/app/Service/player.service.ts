import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../general/Player';
import { Admin } from '../general/Admin';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // private playerUrl = 'http://localhost:8080/team';
  // private adminUrl = 'http://localhost:8080/admin';
  // private historyUrl = 'http://localhost:8080/history';
  constructor(private http: HttpClient) { }



  getplayer(): Observable<any> {
    return this.http.get(`/team/allplayers`);
  }

  getplayerbyid(id: number): Observable<any> {
    return this.http.get(`/team/fetchplayer/${id}`);
  }

  getplayerbyname(name : String):Observable<any>{
    return this.http.get(`/team/searchplayer/${name}`)
  }

  addPlayer(player: Player): Observable<any> {
    return this.http.post(`/team/addnewplayer`, player);
  }

  deleteplayer(id: number): Observable<any> {
    return this.http.delete(`/team/deleteplayer/${id}`);
  }

  updateplayer(id: number, updatePlayerdata: Player): Observable<any> {
    return this.http.put(
      `/team/updateplayer/${id}`,
      updatePlayerdata
    );
  }

  sample_test() {
    return 'Service method test';
  }


  verifyAdmin(adminName: string, password: string): Observable<any> {
    const admin = { adminName, password };
    return this.http.post(`/admin/loginAuthentication`, admin);
  }


  getAdmin(): Observable<any> {
    return this.http.get(`/admin/alladmins`);
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`/admin/fetchadmin/${id}`);
  }

  addAdmin(admin: Admin): Observable<any> {
    return this.http.post(`/admin/addnewadmin`, admin);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`/admin/deleteadmin/${id}`);
  }

  updateAdmin(id: number, updateAdmindata: Admin): Observable<any> {
    return this.http.put(`/admin/updateadmin/${id}`, updateAdmindata);
  }

  getLastLoggedInAdmin(): Observable<any> {
    return this.http.get(`/history/last-logged-in-admin`);
  }

}
