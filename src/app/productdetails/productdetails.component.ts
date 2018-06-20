import { Component, OnInit } from '@angular/core';
import { ViewproductService } from '../viewproduct.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { viewproduct } from '../viewproduct/viewproduct';
import { login } from '../login/login';
import { LoginService } from '../login.service';
import { GetallcategoryService } from '../getallcategory.service';
import { getallcategory } from '../viewproduct/getallcategory';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  Id:number;
  Name:string;
  Price:number;
  Qty:number;
  Mfg:string;
  Soh:number;
  Img:string;
  Color:string;
  Fk_Cat_Id:number;
  Descr:string;
  Cat_Name:number;
  carr:viewproduct[]=[];
  garr:getallcategory[]=[];
  arr:string[]=[
    "../../assets/logo2.jpg",
    "../../assets/Shopping.jpg"

  ];
  pid:number;
  description:viewproduct[]=[];

  constructor(private _route:Router,private _xyz:ViewproductService,private _getallcategory:GetallcategoryService,private _acroute:ActivatedRoute,private _serv:LoginService) { }




  ngOnInit() {
    this.pid=this._acroute.snapshot.params['Id'];
    this._getallcategory.getProductDescription(this.pid).subscribe(
      (data:any)=>{
        console.log(data);
        this.description=data;
      }
    );


        this._xyz.getAllProducts().subscribe(
          (data:any)=>{
            this.carr=data;
          }
        );


        this._getallcategory.getAllCategory().subscribe(
          (data:any)=>{
            this.garr=data;
          }
        );

  }

  onLogin()
  {
      this._route.navigate(['/login']);
  }




}
