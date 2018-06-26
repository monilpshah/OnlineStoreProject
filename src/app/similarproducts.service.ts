import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { viewproduct } from '../app/viewproduct/viewproduct';
import {  Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SimilarproductsService {

  private url:string='http://localhost:3000/similarproduct/';
  constructor(private _http:HttpClient,private _route:Router) { }
  getProductByCatId(Fk_Cat_Id){
    return this._http.get(this.url+Fk_Cat_Id);
  }
}

