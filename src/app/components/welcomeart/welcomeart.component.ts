import { Component, OnInit } from '@angular/core';
const SALUDO="Hi there, I'm";
const NOMBRE="Marcos Careggio";
const DEVCLASS="Full-Stack Developer";
const AVATARSRC="assets/img/avatar.png";
const BUTTONTEXT="See More";
@Component({
  selector: 'app-welcomeart',
  templateUrl: './welcomeart.component.html',
  styleUrls: ['./welcomeart.component.css']
})
export class WelcomeartComponent implements OnInit {
  public saludo;
  public nombre;
  public devclasificacion;
  public avatarsrc;
  public buttontext;
  constructor() { 
    this.saludo=SALUDO;
    this.nombre=NOMBRE;
    this.devclasificacion=DEVCLASS;
    this.avatarsrc=AVATARSRC;
    this.buttontext=BUTTONTEXT;
  }

  ngOnInit(): void {

  }
  btnSeeMore(){}
}
