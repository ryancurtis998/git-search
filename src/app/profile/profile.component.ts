import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any=[];
  repository:any=[];
  username:string;

  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getUser().subscribe(user => {
      console.log(user);

      this.user = user;
    })
    this.ProfileService.getRepository().subscribe(repository => {
    // console.log(repos)
      this.repository = repository;
    })
  }

  ngOnInit() {
  }
   searchUser(){
     this.ProfileService.updateUser(this.username);
     this.ProfileService.getUser().subscribe(user => {
       this.user = user;
     })

     this.ProfileService.getRepository().subscribe(repository => {

       this.repository = repository;
     })

   }
}