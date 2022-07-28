import { Component, OnInit } from '@angular/core';
const OWNFOTOSRC="assets/img/ownfotomin.jpg";
const SECONDTITLE="Who I Am __________";
const FIRSTTITLE= "About Me";
const ABOUTTEXT=["I am Marcos Careggio a Junior developer with frontend and backend skils, i olso have skils in java descktop apps and android movile apps with java.",
"I begin studing programing in a Public University, where i learn the base of computer programming.",
"After that i develop several proyect on my own and work for an entreprise as IT where i develop an internal web software with a fantastic grop.",
"Actually I am looking for an junior job to improbe my skils and enjoy my work."];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public ownfotoscr;
  public secondtitle;
  public firsttitle;
  public abouttext;
  constructor() { 
    this.ownfotoscr=OWNFOTOSRC;
    this.secondtitle=SECONDTITLE;
    this.abouttext=ABOUTTEXT;
    this.firsttitle=FIRSTTITLE;
    
  }

  ngOnInit(): void {
  }

}
