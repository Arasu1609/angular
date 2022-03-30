import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
})
export class FirstpageComponent implements OnInit {
  constructor(private router: Router) {}

  // constructor() {}

  ngOnInit(): void {}
  click1= () =>{
    this.router.navigateByUrl('/netflix');
  }
  click2=() =>{
    this.router.navigateByUrl('/login');
  }
}
