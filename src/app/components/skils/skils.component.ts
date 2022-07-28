import { Component, OnInit } from '@angular/core';
const SKILS=[
  { iconPath:'assets/icons/mayormenor.svg',
    title:'Web Full Stack',
    text:'FrontEnd and BackEnd Dev.Frontend Html, Css, Angular, Typescript.'
  },
  { iconPath:'assets/icons/androidlogo.svg',
    title:'Android Java',
    text:'A Fullstack Android App developer in Java Language.'
  },
  { iconPath:'assets/icons/javaicon.svg',
    title:'Java Desktop',
    text:'A Fullstack Java Descktop in Java Language.'
  }
]
@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {
  public skils;
  constructor() {
    this.skils=SKILS;
   }

  ngOnInit(): void {
  }

}
