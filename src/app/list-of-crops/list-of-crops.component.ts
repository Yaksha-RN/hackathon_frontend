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

export class Order{
  constructor(
  public next: string,
  public previous: string,
  public page_size: number,
  public count: number,
  public results: Details[]){
  }
}

export class Details{
  constructor(
  public platform: Platform,
  public seller: Seller,
  public product: Product,
  public quantity: number){
  }
}

export class Seller{
  constructor(
  public seller_name: string,
  public user: number){
  }
}

export class Platform{
  constructor(
  public id: number,
  public platform_name: string){
  }
}

export class Product{
  constructor(
  public product_name: string,
  public product_description: string,
  public platforms:number[],
  public cost_price:number,
  public selling_price:number,
  public discount_percentage:number,
  public product_image:string){
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

  order:Order ={
    next: '',
    previous: '',
    count: 1,
    page_size: 10,
    results: [
        {
            "platform": {
                "id": 1,
                "platform_name": "Inst"
            },
            "seller": {
                "seller_name": "shwet",
                "user": 549452
            },
            "product": {
                "product_name": "Tomato",
                "product_description": "Tomato orgaic",
                "platforms": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15
                ],
                "cost_price": 100,
                "selling_price": 80,
                "discount_percentage": 80,
                "product_image": "https://leanconnect.s3.amazonaws.com/media/1280px-Tomato_je.jpeg"
            },
            "quantity": 32
        }
    ]
}
  cropsList:Crop[]=[];
  constructor(private router:Router, private data:DataService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.data.getCropsListFromRestApi().subscribe(
      response=>{
        // this.cropsList=response;
        // console.log(this.cropsList);
        console.log(response);
      }
    );

    this.data.getOrdersFromRestApi().subscribe(
      response=>{
        this.order=response;
        console.log(this.order);
      }
    );
  }

  getCropDetails(name:string){
    this.router.navigate(['/crops',name]);
  }

  handleLogout(){
    this.auth.logout();
  }

  searching(){
    this.data.getOrdersFromRestApi2(this.search).subscribe(
      response=>{
        this.order=response;
        console.log(this.order);
      }
    );
  }
}
