import { Component, OnInit } from '@angular/core';

const navbarBrand="Marcos Careggio";
const NAVITEMS=[
  {text:"Home",path:"#home"},
  {text:"About",path:"#about"},
  {text:"Skils",path:"skils"},
  {text:"Studies",path:"studies"},
  {text:"Proyects",path:"proyects"},
  {text:"Contact",path:"contact-me"}
  ];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public navbarBrand;
  public navitems;
  constructor() { 
    this.navbarBrand=navbarBrand;
    this.navitems=NAVITEMS;
  }

  ngOnInit(): void {
  }

}
