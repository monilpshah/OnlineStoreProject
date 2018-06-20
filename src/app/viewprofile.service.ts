import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { viewprofile } from '../app/viewprofile/viewprofile';
import {  Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {

  private url:string='http://localhost:3000/user/';
  constructor(private _http:HttpClient,private _route:Router) { }

    getLogById(emailId){
    return this._http.get(this.url+emailId);
  }



}
