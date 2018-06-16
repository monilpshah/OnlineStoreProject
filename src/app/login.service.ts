import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { login } from '../app/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private url:string='http://localhost:3000/userlogin/';

  constructor(private _http:HttpClient) { }


  getLogById(item){
      let body=JSON.stringify(item);
      console.log(body);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url,body,{headers:head1});
  }
  


}
