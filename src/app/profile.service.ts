import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { map } from 'rxjs/operators';



import {Repository} from './repository'
import {User} from './user'
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username:string;

    constructor(private http: HttpClient){
      console.log('Github Service Ready...');
      this.username = 'ryancurtis998';

    }
    getUser(){
      return this.http.get("https://api.github.com/users/"+this.username)
      .pipe(map(result=>result))

    }
    getRepository(){
      return this.http.get("https://api.github.com/users/"+this.username +'/repos')
      .pipe(map(result=>result))
  }
  updateUser(username:string){
    this.username = username;
  }
}