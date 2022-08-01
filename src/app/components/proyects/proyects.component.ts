import { Component, OnInit } from '@angular/core';
import { ProyectsInterface } from 'src/app/models/proyects-interface';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
const PROYECTS:ProyectsInterface[]=[
  {
    id:1,
    title:"WebPortfolio",
    about:"This is a Web Proyect that shows my skils/proyects, allow download my CV, and olso is a final proyect for a course that i participated",
    devlanguage:"Html, Css, Angular,Java Spring, SQL",
    imglink:"assets/img/webportfolio.png",
    weblink:"",
    githublink:"https://github.com/mcareggio/portfolio-Frontend"
  },
  {
    id:2,
    title:"Take Meter Status App",
    about:"This is an Android App that allow store all meter of electrical energy meters of a town. Then the app organise the information and allow export it in specif format to upload to billing software.",
    devlanguage:"Java",
    imglink:"assets/img/apptomaestado.png",
    weblink:"",
    githublink:"https://github.com/mcareggio/tomaestado"
  }
];

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  
  public proyects:ProyectsInterface[];
  public fagithub=faGithub;
  public faLink=faLink;
  
  constructor() { 
    this.proyects=PROYECTS;
  }

  ngOnInit(): void {
  }

  getRows(){
    return [1];
  }
  getProyects(row:number){
    console.log("row"+row);
    return this.proyects;
  }
}
