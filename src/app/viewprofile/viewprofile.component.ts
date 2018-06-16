import { Component, OnInit } from '@angular/core';
import { ViewprofileService } from '../viewprofile.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { viewprofile } from './viewprofile';
import { login } from '../login/login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

   emailId:string;
  userName:string;
  password:string;
  mobileNo:number;
  city:string;
  gender:string;
  address:string;
  

  constructor(private _route:Router,private _xyz:ViewprofileService,private _acroute:ActivatedRoute,private _serv:LoginService) { }
  ngOnInit() {
    this.emailId=this._acroute.snapshot.params['emailId'];
    this._xyz.getLogById(this.emailId).subscribe(
      (data:any)=>
      {
      
        this.emailId=data[0].emailId;
        this.userName=data[0].userName;
        this.password=data[0].password;
        this.mobileNo=data[0].mobileNo;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;

      }
    );
  }

    
  onLogin()
{
    this._route.navigate(['/login']);

    
}

    editProfile(){
            this._route.navigate(['/editprofile',this.emailId]);
  }


  changePassword(){
            this._route.navigate(['/changepassword',this.emailId]);
  }

}

