import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = '';
  fname='';
  address='';
  faddress=''
  city='';
  fcity='';
  pin='';
  fpin=''
  email='';
  femail='';
  phone='';
  fphone='';

  condition = false;
  onClick(){
    this.name = this.fname;
    this.city=this.fcity;
    this.address=this.faddress;
    this.phone=this.fphone;
    this.pin=this.fpin;
    this.email=this.femail;
    this.condition = true;
  }

}
