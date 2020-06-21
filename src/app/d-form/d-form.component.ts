import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-d-form',
  templateUrl: './d-form.component.html',
  styleUrls: ['./d-form.component.css']
})
export class DFormComponent implements OnInit {
searchName: string;

  @Output()searchIn = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchIn.emit(this.searchName);
    this.searchName = "";
  }
}