import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  inputValue!: string;
  mavar !: string;
  btn1click(){
    this.mavar="sidy barry btn1";
  }

  btn2click(){
    this.mavar="btn2 ";
  }
}
