import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service';

export class Crop{
  constructor(
  public id: number,
  public name: string,
  public season: string,
  public sowingTime: string,
  public harvestingTime: string,
  public duration: string){
  }
}

@Component({
  selector: 'app-list-of-crops',
  templateUrl: './list-of-crops.component.html',
  styleUrls: ['./list-of-crops.component.css']
})
export class ListOfCropsComponent implements OnInit {
  
  search='';
  searchResult:boolean=true;
  crop={
    id:'1',
    name:'wheat',
    season:'ravi',
    sowingTime:'mid november',
    harvestingTime:'mid march',
    duration:'5 months'
  }

  crops=[
    { 
      id:'1',
      name:'wheat',
      season:'ravi',
      sowingTime:'mid november',
      harvestingTime:'mid march',
      duration:'5 months'
    },
    { 
      id:'2',
      name:'rice',
      season:'kharif',
      sowingTime:'mid june',
      harvestingTime:'october end',
      duration:'5 months'
    },

  ]
  
  cropsList:Crop[]=[];
  constructor(private router:Router, private data:DataService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.data.getCropsListFromRestApi().subscribe(
      response=>{
        this.cropsList=response;
        console.log(this.cropsList);
      }
    );
  }

  getCropDetails(name:string){
    this.router.navigate(['/crops',name]);
  }

  handleLogout(){
    this.auth.logout();
  }
}
