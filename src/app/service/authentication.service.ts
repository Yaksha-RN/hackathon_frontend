import { Injectable } from '@angular/core';

export class User{
  constructor(public username:string,public password:string){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username:string,password:string):boolean{
    console.log('before ' +this.isUserLoggedIn());
    if(username==='yaksha' && password==='password'){
      sessionStorage.setItem('validUser',username);
      console.log('after ' +this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn():boolean{
    if(sessionStorage.getItem('validUser')===null){
      return false;
    }
    return true;
  }

  logout(){
    sessionStorage.removeItem('validUser');
  }
}
