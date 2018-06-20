import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { getallcategory } from '../app/viewproduct/getallcategory';
import {  Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetallcategoryService {

  private url:string='http://localhost:3000/userlogin/';
  constructor(private _http:HttpClient,private _route:Router) { }


  getAllCategory(){
    return this._http.get(this.url);
  }

  getProductDescription(Id){
    return this._http.get("http://localhost:3000/product_tbl/"+Id);
  }



}
