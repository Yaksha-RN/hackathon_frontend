import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message='';
  constructor(private route:ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.message= this.route.snapshot.params['name'];
  }

  handleLogout(){
    this.auth.logout();
  }
  
}
