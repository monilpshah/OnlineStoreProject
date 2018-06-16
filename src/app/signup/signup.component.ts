import { Component, OnInit } from '@angular/core';
import { signup } from './signup';
import { SignupService } from '../signup.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { login } from '../login/login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailId:string;
  userName:string;
  password:string;
  mobileNo:number;
  city:string;
  gender:string;
  address:string;
  arr:signup[]=[];

  constructor(private _route:Router,private _xyz:SignupService,private _serv:LoginService) { }

  ngOnInit() {
  }
  existUser(){
      this._route.navigate(['/login']);
  }

  onLogin()
{
    this._route.navigate(['/login']);

    
}
onForget()
{
  this._route.navigate(['/forgetpass']);
}
onSignup()
{
  this._route.navigate(['/signup']);
}

  addLog(){
    this._xyz.addLog(new signup(this.emailId,this.userName,this.password,this.mobileNo,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        this.arr.push(new signup(this.emailId,this.userName,this.password,this.mobileNo,this.city,this.gender,this.address));
      }
    );
    this._route.navigate(['/login']);
  }

}
