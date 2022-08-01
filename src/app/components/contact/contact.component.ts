import { Component, OnInit } from '@angular/core';
import { faPhoneSquare,faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Aviso } from 'src/app/models/aviso';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public faPhoneSquare=faPhoneSquare;
  public faLocationDot=faLocationDot;
  public faEnvelope=faEnvelope;
  public formContact:FormGroup;
  public aviso:Aviso;

  constructor(private formBuilder:FormBuilder) {
    this.aviso={titulo:"Aviso",cuerpo:"El formulario fue enviado. Gracias por contactarme.",textoboton:"Cerrar",visible:false};
    
    this.formContact=this.formBuilder.group({
      fullnamecontact:['',[Validators.required,Validators.maxLength(50)]],
      emailcontact:['',Validators.maxLength(50)],
      phonenumbercontact:['',Validators.maxLength(30)],
      messagecontact:['',]
    });
  }

  ngOnInit(): void {
  }
  get Fullname(){
    return this.formContact.get("fullnamecontact");
  }
  get Email(){
    return this.formContact.get("emailcontact");
  }
  get Phone(){
    return this.formContact.get("phonenumbercontact");
  }
  private resetFormValues(){
    this.formContact.get("fullnamecontact")?.setValue("");
    this.formContact.get("emailcontact")?.setValue("");
    this.formContact.get("phonenumbercontact")?.setValue("");
    this.formContact.get("messagecontact")?.setValue("");
  }
  public validateEmailPhone(){
    let res:boolean=true;
    if(this.formContact.get("emailcontact")?.value==''&&this.formContact.get("phonenumbercontact")?.value=='')    
    res=false;
    return res;
  }
  onSubmit(evnt:Event){
    evnt.preventDefault;
    
    if(this.validateEmailPhone()&&this.formContact.valid){
      this.formContact.markAsUntouched();
      this.aviso.visible=true;
      this.resetFormValues();
    }
    else{
      this.formContact.markAllAsTouched();
    }
  }
}
