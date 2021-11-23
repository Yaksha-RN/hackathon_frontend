import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crop } from '../list-of-crops/list-of-crops.component';
import { AuthenticationService } from '../service/authentication.service';
import { DataService } from '../service/data.service';

export class CropDetails{
  constructor(
  public  name: string,
	public  alias: string,
	public  veriety: string,
	public  duration: string,
	public  seedSelection: string,
	public  prepration: string,
	public  sowing: string,
	public  irigation: string,
	public  fertilizers: string,
	public  harvesting: string,
	public  diseases: string,
	public  prevention: string,
  ){  }
}

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {
  message:string='';
  cropDetails:CropDetails={
      name: '',
      alias: '',
      veriety: '',
      duration: '',
      seedSelection: '',
      prepration: '',
      sowing: '',
      irigation: '',
      fertilizers: '',
      harvesting: '',
      diseases: '',
      prevention: ''
  };
  // singleAtribute={
  //   atribute:'',
  //   value:''
  // };
  constructor(private route:ActivatedRoute, private data:DataService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.message= this.route.snapshot.params['cropName'];
    console.log(this.message);
    this.data.getCropDetailsFromRestApi(this.message).subscribe(
      response=>{
        this.cropDetails=response;
        console.log(this.cropDetails);
      }
    );
  }

  handleLogout(){
    this.auth.logout();
  }

}
