import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository'
import {User} from '../user'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:any=[];
  repository:any=[];
  username:string;
  constructor() { }

  ngOnInit() {
  }

}