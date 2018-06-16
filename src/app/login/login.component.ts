import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { login } from './login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId:string;
  password:string;
  parr:string[]=[];
  constructor(private _route:Router,private _serv:LoginService) { }

  ngOnInit() {

  }


onLogin()
{

this._serv.getLogById(new login(this.emailId,this.password)).subscribe(
      (data:any)=>{
        if(data.length==1)
        {
        console.log("success");
        this._route.navigate(['/viewprofile',this.emailId]);
        }
        else
        {
          console.log("wrong");
          alert("Username or Password mismatch");
        }
      }
    );
    
}
onForget()
{
  this._route.navigate(['/forgetpass']);
}
onSignup()
{
  this._route.navigate(['/signup']);
}
}
