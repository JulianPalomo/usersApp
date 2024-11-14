import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './userModel/user';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
  addUser(user: user): Promise<any> {
    return this.http.post(this.url, user).toPromise();
  }
  deleteUser(id: number): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise();
  }
  getById(id : number): Promise<any>{
    return this.http.get(this.url + '/'+ id).toPromise();
  }
}
