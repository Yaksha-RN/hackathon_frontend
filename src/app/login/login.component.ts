import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  errorMessage='Invalid Credentials !!';
  isloginValid=false;

  constructor(private router:Router, private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.auth.authenticate(this.username,this.password)){
      this.isloginValid=false;
      this.router.navigate(['welcome',this.username]);
    }
    else{
      this.isloginValid=true;
      this.password='';
    }
    console.log('username: '+this.username);
  }
}
