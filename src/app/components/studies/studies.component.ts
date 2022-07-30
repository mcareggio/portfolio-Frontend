import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const STUDIECATS=[
  {id:1,
  title:"University Formation"},
  { id:2,
    title:"Complementari Formation"}];

const STUDIES=[
{
  catid:1,
  title:"Analyst Programer",
  institucion:"Public University of La Pampa of Argentina-UNLPAM (95% of Carrer)"},
{ 
  catid:2,
  title:"Argentina Programa",
  institucion:"Statal Course of Argentina about progamming bases and  fullstack web programming using Angular in front and Spring in back."
},
{ 
  catid:2,
  title:"English Language",
  institucion:"Six Years in English Cultural School Academy Santa Rosa-La Pampa-Argentina"
},{ 
  catid:2,
  title:"Responsive Web Design",
  institucion:"FreeBootCamps.org"
},
{ 
  catid:2,
  title:"JavaScript Algorithms and Data Structure",
  institucion:"FreeBootCamps.org"
}

];
@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})


export class StudiesComponent implements OnInit {
  public studies;
  public stuidecats;
  public faCode=faTerminal;
  constructor() { 
    this.studies=STUDIES;
    this.stuidecats=STUDIECATS;
  }

  ngOnInit(): void {
  }
  public getStudiesById(loccatid:number){
    const array=this.studies.filter(studie=>studie.catid==loccatid);
    console.log(array);
    return array;
  }
}
