import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  number1 : number;
  number2: number;

  mul(d:NgForm){
    this.number1=d.value.n1;
    this.number2=d.value.n2;
    alert(this.number1 * this.number2);
  }

}