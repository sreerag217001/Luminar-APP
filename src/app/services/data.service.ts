import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser="";
  currentEmail: any;

  constructor() {
    // this.getDetails();
   }
// saveDetails()-To store data into localstorage

saveDetails(){
  if(this.userDetails){
    localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
  }
  if(this.userDetails){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  }
  if(this.userDetails){
    localStorage.setItem('currentEmail',JSON.stringify(this.currentEmail))
  }
}
getDetails(){
  if(this.userDetails){
    this.userDetails=JSON.parse(localStorage.getItem('Database')||'')
  }
  if(this.currentUser){
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')||'')
  }
  if(this.currentEmail){
    this.currentEmail=JSON.parse(localStorage.getItem('currentEmail')||'')
  }
}

  userDetails:any={
    "sreeragp@gmail.com":{email:"sreeragp@gmail.com",password:1000,username:"Sreerag",place:"Kannur",qualification:"bca"},
    "avani@gmail.com":{email:"avani@gmail.com",password:1001,username:"Aavani",place:"Wayanad",qualification:"bcom"},
    "jeritbenny@gmail.com":{email:"jeritbenny@gmail.com",password:1002,username:"Jerit",place:"Kozhikode",qualification:"bca"},
    "amalkumar@gmail.com":{email:"amalkumar@gmail.com",password:1003,username:"Amalkumar",place:"Malapuramr",qualification:"btech"},
  }
  register(username:any,email:any,password:any,place:any,qualification:any){
        let userDetails=this.userDetails
        if(email in userDetails){
          return false;
        }
        else{
          userDetails[email]={
            username:username,
            email:email,
            password:password,
            place:place,
            qualification:qualification
          }
          console.log(userDetails);
          this.saveDetails();
          return true;
        }
  }
  login(email:any,pswd:any){
     let userDetails=this.userDetails
     if(email in userDetails){
      if(pswd==userDetails[email]['password']){
        this.currentUser=userDetails[email]['username']
        this.currentEmail=email
        this.saveDetails();
        return true;
      }
      else{
        return false;
      }
     }
     else{
      return false;
     }
  }
}
