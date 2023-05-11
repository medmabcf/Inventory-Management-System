import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
  signupUsers: any[]=[];
  signupObj:any={
    nom:'',
    prenom:'',
    adresse:'',
    code_postal:'',
    email:'',
    password:'',
    confpassword:''
  }; 
  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUsers');
    if (localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      nom:'',
      prenom:'',
      adresse:'',
      code_postal:'',
      email:'',
      password:'',
      confpassword:''
    }; 
  }

}
