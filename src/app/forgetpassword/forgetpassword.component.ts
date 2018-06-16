import { Component, OnInit } from '@angular/core';
import { ChangepasswordService } from '../changepassword.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { changepass } from '../changepassword/changepass';
import { login } from '../login/login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

 constructor(private _route:Router,private _xyz:ChangepasswordService,private _acroute:ActivatedRoute,private _serv:LoginService) { }

newPassword:string;
emailId:string;
  userName:string;
  password:string;
  mobileNo:number;
  city:string;
  gender:string;
  address:string;
  flag:boolean=false;
  confirmPassword:string;

  ngOnInit() {
  }
oncheck(){
  this._xyz.getLogById(this.emailId).subscribe(
      (data:any)=>
      {
        if(data.length==1)
        {
          this.flag=true;
        }
       else
       {
         alert("please enter correct email");
       }

      }
    );
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


onChange()
{
  if(this.newPassword==this.confirmPassword){
  this.password=this.newPassword;
        this._xyz.updateLog(new changepass(this.emailId,this.userName,this.password,this.mobileNo,this.city,this.gender,this.address)).subscribe(
        (data:any)=>{
          console.log(data);
        }
      );
      this._route.navigate(['/login']);
  }
  else{
    alert("Password Mismatch.. \n Confirm that both passwords are same.");
  }
}


}
