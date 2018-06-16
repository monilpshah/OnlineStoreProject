import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { EditprofileService } from '../editprofile.service';
import { editprofile } from './editprofile';
import { login } from '../login/login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  
  
   emailId:string;
  userName:string;
  password:string;
  mobileNo:number;
  city:string;
  gender:string;
  address:string;
  arr:editprofile[]=[];


  constructor(private _route:Router,private _xyz:EditprofileService,private _acroute:ActivatedRoute,private _serv:LoginService) { }

  ngOnInit() {
    this.emailId=this._acroute.snapshot.params['emailId'];
    console.log(this.emailId);
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
        



        // data[0].emailId=this.emailId;
        // data[0].userName=this.userName;
        // data[0].password=this.password;
        // data[0].mobileNo=this.mobileNo;
        // data[0].city=this.city;
        // data[0].gender=this.gender;
        // data[0].address=this.address;
  
      }
    );
  }

  updateLog(){
        this._xyz.updateLog(new editprofile(this.emailId,this.userName,this.password,this.mobileNo,this.city,this.gender,this.address)).subscribe(
        (data:any)=>{
          console.log(data);
        }
      );
      this._route.navigate(['/viewprofile',this.emailId]);
  }

  viewProfile(){
            this._route.navigate(['/viewprofile',this.emailId]);
    }

    
  changePassword(){
            this._route.navigate(['/changepassword',this.emailId]);
  }
  onLogin()
{
    this._route.navigate(['/login']);

    
}

}
