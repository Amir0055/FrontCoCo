import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';


@Component({
  selector: 'app-test-acces',
  templateUrl: './test-acces.component.html',
  styleUrls: ['./test-acces.component.css']
})
export class TestAccesComponent implements OnInit {
  authRequest:any={   
    "email":"amirzaafouri1@gmail.com",
    "password":"123"
    };

  
    response:any;
  constructor(   private userService: UserService, 
                private userAuthService:UserAuthService
   ,private router: Router  ){}
  
  ngOnInit(): void {

    // this.getAccessToken(this.authRequest);
   }

   login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
      this.userAuthService.setAutoritys(response.user.autority);
      this.userAuthService.setToken(response.jwtToken);
      const role = response.user.autority[0].name;//return object min array  
      console.log(role);//affiche variable role Name string 
        if(role ==='USER'){
          console.log("I'm USER");
          this.router.navigate(['/user/home'])
        }
        if(role ==='ADMIN'){
          console.log("I'm ADMIN");
          this.router.navigate(['/admin/home'])
        }
    },
      (error) => {
        console.log(error);
   
      }
    );
  }

  
}
