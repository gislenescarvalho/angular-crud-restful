
import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {

  private url = 'https://test-frontend-neppo.herokuapp.com/pessoas';

  constructor(private http: Http) { }


  getUsers() {
    return this.http.get(this.url + '.json')
      .map(res => res.json());
  }


  getUser(id) {
    return this.http.get(this.getUserUrl(id) + '.json')
      .map(res => res.json());
  }

  addUser(user) {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: header });
    return this
    .http
    .post(this.url, JSON.stringify(user), options);
  }

  updateUser(id, user) {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: header });
    return this.http.put( this.url + 'id' + '.json', JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }


  private getUserUrl(id) {
    return this.url + '/' + id;
  }


}
