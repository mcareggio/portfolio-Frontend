import { Component, OnInit } from '@angular/core';
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
