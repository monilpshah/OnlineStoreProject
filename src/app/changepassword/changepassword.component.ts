import { Component, OnInit } from '@angular/core';
import { ChangepasswordService } from '../changepassword.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { changepass } from './changepass';
import { login } from '../login/login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private _route:Router,private _xyz:ChangepasswordService,private _acroute:ActivatedRoute,private _serv:LoginService) { }
oldPassword:string;
oldPassword1:string;
newPassword:string;
emailId:string;
  userName:string;
  password:string;
  mobileNo:number;
  city:string;
  gender:string;
  address:string;
  confirmPassword:string;

  ngOnInit() {
this.emailId=this._acroute.snapshot.params['emailId'];
    this._xyz.getLogById(this.emailId).subscribe(
      (data:any)=>
      {
        this.oldPassword1=data[0].password;
       

      }
    );

  }

  viewProfile(){
            this._route.navigate(['/viewprofile',this.emailId]);
    }

    editProfile(){
            this._route.navigate(['/editprofile',this.emailId]);
  }
  onLogin()
{
    this._route.navigate(['/login']);

    
}

onChange()
{
  if(this.newPassword==this.confirmPassword){


                    this.emailId=this._acroute.snapshot.params['emailId'];
                    if(this.oldPassword==this.oldPassword1)
                    {
                      this.password=this.newPassword;
                            this._xyz.updateLog(new changepass(this.emailId,this.userName,this.password,this.mobileNo,this.city,this.gender,this.address)).subscribe(
                            (data:any)=>{
                              console.log(data);
                            }
                          );
                          this._route.navigate(['/login']);
                      
                    }
                    else
                    {
                      alert("password not match");
                    }
    }
    else{
        alert("Password Mismatch.. \n Confirm that both passwords are same.");
        }
}

}
