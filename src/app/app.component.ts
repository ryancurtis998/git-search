import { Component } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {ProfileService} from './profile.service';
// import {SearchComponent} from './profile/profile.component';


import {Repository} from './repository';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ProfileService]
})
export class AppComponent {}