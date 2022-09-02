import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin:FormGroup;

  constructor(private formbuilder:FormBuilder) {
    this.formLogin=this.formbuilder.group(  
      {nombredeusuario:['',[Validators.required,Validators.maxLength(30)]],
      password:['',[Validators.required,Validators.maxLength(30)]]
      }
    );
   }

  ngOnInit(): void {
  }
  get Password(){
    return this.formLogin.get("password");
  }
  get Nombredeusuario(){
    return this.formLogin.get("nombredeusuario");
  } 
  public onSubmit(evnt:Event){
    evnt.preventDefault;
    if(this.formLogin.valid){

    }
    else{
      this.formLogin.markAllAsTouched();
    }
  }
}
