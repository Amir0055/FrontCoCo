
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';


@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})

export class HeaderUserComponent implements OnInit {
        


  constructor(private router: Router,private userAuthService:UserAuthService){}
 
  ngOnInit(): void {
   
  }
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }     
  public logout() {
    this.userAuthService.clear();
   // this.router.navigate(['/home']);
  }

      
}
