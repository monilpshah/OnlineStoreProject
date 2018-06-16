import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { signup } from '../app/signup/signup';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
private url:string='http://localhost:3000/user/';
  constructor(private _http:HttpClient) { }

    updateLog(item){
      let body=JSON.stringify(item);
      console.log(body);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url+item.emailId,body,{headers:head1});
  }
    getLogById(emailId){
    return this._http.get(this.url+emailId);
  }
  
  }
