import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Crop, Order} from '../list-of-crops/list-of-crops.component';
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

  getOrdersFromRestApi(){
    let header = new HttpHeaders({
      Authorization : this.getBasicAuthHeader()
    })
    //
    return this.http.get<Order>('http://c299-14-143-179-162.ngrok.io/hackathon/api/v1/order/',{headers:header});
  }

  getOrdersFromRestApi2(search: string){
     let header = new HttpHeaders({
      Authorization : this.getBasicAuthHeader()
    })
    return this.http.get<Order>(`http://c299-14-143-179-162.ngrok.io/hackathon/api/v1/order/?q=${search}`,{headers:header});

  }
  getCropDetailsFromRestApi(name:string){
    let header = new HttpHeaders({
      Authorization : this.getBasicAuthHeader()
    })
    return this.http.get<CropDetails>(`http://localhost:8080/crops/${name}`,{headers:header});
  }

  getBasicAuthHeader(){
    let username= 'shwet.desai';
    let password= 'lean1234';
    console.log(username +' '+password);
    let basic = 'Basic '+window.btoa(username+':'+password);
    console.log(basic);
    return basic;
  }
}
