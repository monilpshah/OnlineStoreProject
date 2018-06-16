import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { signup } from '../app/signup/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
     private url:string='http://localhost:3000/user';
  constructor(private _http:HttpClient) { }

    addLog(item){
      
    let body=JSON.stringify(item);
    console.log(body);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

}
