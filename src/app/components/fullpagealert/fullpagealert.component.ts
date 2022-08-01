import { Component, Input, OnInit} from '@angular/core';
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import { Aviso } from 'src/app/models/aviso';

@Component({
  selector: 'app-fullpagealert',
  templateUrl: './fullpagealert.component.html',
  styleUrls: ['./fullpagealert.component.css']
})
export class FullpagealertComponent implements OnInit {
  @Input()text:string="";
  @Input()aviso:Aviso={titulo:"",cuerpo:"",textoboton:"",visible:true};
  
  
  constructor() {
    
  }

  ngOnInit(): void {
  }
  onClickBtn(){
    this.aviso.visible=false;
  }
}
