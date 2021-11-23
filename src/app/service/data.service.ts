import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crop } from '../list-of-crops/list-of-crops.component';
import { CropDetails } from '../crop-details/crop-details.component';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCropsListFromRestApi(){
    let header = new HttpHeaders({
      Authorization : this.getBasicAuthHeader()
    })
    return this.http.get<Crop[]>('http://localhost:8080/crops',{headers:header});
  }

  getCropDetailsFromRestApi(name:string){
    let header = new HttpHeaders({
      Authorization : this.getBasicAuthHeader()
    })
    return this.http.get<CropDetails>(`http://localhost:8080/crops/${name}`,{headers:header});
  }

  getBasicAuthHeader(){
    let username= 'yaksha';
    let password= 'password';
    console.log(username +' '+password);
    let basic = 'Basic '+window.btoa(username+':'+password);
    console.log(basic);
    return basic;
  }
}
