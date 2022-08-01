import { Component, OnInit } from '@angular/core';
import { faLinkedin,faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public faLinkedin=faLinkedin;
  public faWhatsappSquare=faWhatsappSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
