import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username:any;
  mobilenumber:any;
  log(a:NgForm){
    this.username=a.value.email;
    this.mobilenumber=a.value.mobile;
    alert(this.username +" ");
    alert(this.mobilenumber);
  }
}