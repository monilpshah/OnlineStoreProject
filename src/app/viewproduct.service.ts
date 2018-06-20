import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { viewproduct } from '../app/viewproduct/viewproduct';
import {  Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewproductService {

  private url:string='http://localhost:3000/product_tbl/';
  constructor(private _http:HttpClient,private _route:Router) { }


  getAllProducts(){
    return this._http.get(this.url);
  }

  getProductById(Fk_Cat_Id){
    return this._http.get('http://localhost:3000/userlogin/'+Fk_Cat_Id);
  }


}
