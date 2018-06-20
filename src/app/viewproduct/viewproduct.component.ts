import { Component, OnInit } from '@angular/core';
import { ViewproductService } from '../viewproduct.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { viewproduct } from './viewproduct';
import { login } from '../login/login';
import { LoginService } from '../login.service';
import { GetallcategoryService } from '../getallcategory.service';
import { getallcategory } from './getallcategory';

@Component({
  selector: 'app-viewproduct',
  templateUrl:'./viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  emailId:string;
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


  constructor(private _route:Router,private _xyz:ViewproductService,private _getallcategory:GetallcategoryService,private _acroute:ActivatedRoute,private _serv:LoginService) { }




  ngOnInit() {
    this.emailId=localStorage.getItem('emailId');
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

  Category(Fk_Cat_Id){
    this._xyz.getProductById(Fk_Cat_Id).subscribe(
      (data:any)=>{
        this.carr=data;
      }
    );
  }

  viewDetails(Id){


    this._route.navigate(['/productdetails',Id]);
  }

  editProfile(){
    this._route.navigate(['/editprofile']);
}

  viewProfile(){
    this._route.navigate(['viewprofile']);
  }
  onmonutechguru(){
    this._route.navigate(['viewproduct']);
  }

  onLogout(){
    localStorage.clear();
    this._route.navigate(['/login']);
  }
}
