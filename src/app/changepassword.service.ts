
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { changepass } from '../app/changepassword/changepass';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
private url:string='http://localhost:3000/userlogin/';
private url1:string='http://localhost:3000/user/';
  constructor(private _http:HttpClient) { }

    updateLog(item){
      let body=JSON.stringify(item);
      console.log(body);
      console.log(item.emailId);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.url+item.emailId,body,{headers:head1});
  }
    getLogById(emailId){
    return this._http.get(this.url1+emailId);
  }
  
  }
