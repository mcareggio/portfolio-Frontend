import { Component, OnInit } from '@angular/core';
const OWNFOTOSRC="assets/img/ownfotomin.jpg";
const SECONDTITLE="Who I Am";
const FIRSTTITLE= "About Me";
const ABOUTTEXT="I am Marcos Careggio a developer with frontend and backend skils, i olso have skils in java descktop apps and android movile apps with java";
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
