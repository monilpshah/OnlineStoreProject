import { Component, OnInit } from '@angular/core';
import { ViewproductService } from '../viewproduct.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { viewproduct } from '../viewproduct/viewproduct';
import { LoginService } from '../login.service';
import { GetallcategoryService } from '../getallcategory.service';
import { getallcategory } from '../viewproduct/getallcategory';
import { SimilarproductsService } from '../similarproducts.service';

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
  similar:viewproduct[]=[];
  pid:number;


  constructor(private _route:Router,private _xyz:ViewproductService,private _getallcategory:GetallcategoryService,private _acroute:ActivatedRoute,private _serv:SimilarproductsService) { }




  ngOnInit() {
    this.pid=this._acroute.snapshot.params['Id'];
    this._getallcategory.getProductDescription(this.pid).subscribe(
      (data:any)=>{
        console.log(data);

            this.Id=data[0].Id;
            this.Name=data[0].Name;
            this.Price=data[0].Price;
            this.Qty=data[0].Qty;
            this.Mfg=data[0].Mfg;
            this.Soh=data[0].Soh;
            this.Img=data[0].Img;
            this.Color=data[0].Color;
            this.Fk_Cat_Id=data[0].Fk_Cat_Id;
            this.Descr=data[0].Descr;
            this._serv.getProductByCatId(this.Fk_Cat_Id).subscribe(
              (data:any)=>{
                console.log(data);
                this.similar=data;
              }
            );
      }
    );

  }


  viewDetails(Id){
    this._route.navigate(['/productdetails',Id]);
  }

  viewProduct(){
    this._route.navigate(['/viewproduct']);
  }
  onmonutechguru(){
    this._route.navigate(['viewproduct']);
  }

  onLogout(){
    localStorage.clear();
    this._route.navigate(['/login']);
  }

  viewProfile(){
    this._route.navigate(['/viewprofile']);
  }

  editProfile(){
    this._route.navigate(['/editprofile']);
}

}
