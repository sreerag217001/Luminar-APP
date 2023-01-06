import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your IT Career Begins Here";
  Email="Enter your Email Here";
  password="Enter your password Here";

  email='';
  pswd='';

  //database
  loginForm=this.fb.group({
    
    email:['',[Validators.required,Validators.pattern('')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  
   emailChange(event:any){
    console.log(event);

    this.email=event.target.value;
    console.log(this.email)
    
   }
   pswdChange(event:any){
     this.pswd=event.target.value;
     console.log(this.pswd);
   }
  //  login(e:any,p:any){
  //   // alert('click login')
  //   var email=e.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;
  //   if(email in userDetails){
  //     if(pswd==userDetails[email]['password']){
  //       alert('Login Successfull')
  //     }
  //     else{
  //       alert('Invalid Password')
  //     }
  //   }
  //   else{
  //     alert('Invalid User Details')
  //   }
  // }
  login(){
    // alert('click login')
    var email=this.loginForm.value.email;
    var pswd=this.loginForm.value.pswd;
    var userDetails=this.ds.userDetails;
    if(this.loginForm.valid){
    const result=this.ds.login(email,pswd)
    if(result){
      alert('Login Successfull')
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert('Login failed');

    }
  }
  else{
    alert('Invalid form')
  }
}
}
  //   if(email in userDetails){
  //     if(pswd==userDetails[email]['password']){
       
  //     }
  //     else{
  //     }
  //   }
  //   else{
  //     alert('Invalid User Details')
  //   }
  // }

