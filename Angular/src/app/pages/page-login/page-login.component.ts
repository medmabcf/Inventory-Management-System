import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  signupUsers: any[]=[];
  
  loginObj:any={
    email:'',
    password:''
  }; 
  constructor(private router:Router){

  }
  ngOnInit(): void {
     const localData=localStorage.getItem('signUpUsers');
    if (localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
  }
  onLogin(){
    debugger
    const isUserExist=this.signupUsers.find(m=> m.email==this.loginObj.email && m.password==this.loginObj.password);
    if (isUserExist !=undefined){
      alert('User Login Successfully');
      this.router.navigate(['/statistiques']);

    }else{
      alert('Wrong credentials');
    }
  }
}
