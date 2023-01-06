import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
aim="Your IT Career Begins Here";
  uname="";
  email="";
  pswd="";
  place="";
  qualification="";
 
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    place:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    qualification:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })



  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
    //  alert('clicked')
    console.log(this.registerForm);
    var username=this.registerForm.value.uname;
    var email=this.registerForm.value.email;
    var password=this.registerForm.value.pswd;
    var place=this.registerForm.value.place;
    var qulaification=this.registerForm.value.qualification;
    if(this.registerForm.valid){
      console.log(this.registerForm.get('uname')?.errors);
      const result=this.ds.register(username,email,password,place,qulaification);
      if(result){
        alert('register Successfull')
        this.router.navigateByUrl('')
      }
      else{
        alert('register failed')
        this.router.navigateByUrl('register')
      }
    }else{
      alert('Invallid form');
    }
   
}
}
