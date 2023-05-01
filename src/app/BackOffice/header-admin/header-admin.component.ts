import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  UserConnecter!:string;
  user!:any;
  constructor( private userService:UserService,
    private userAuthService:UserAuthService ){}

  ngOnInit(): void {
        //get email from JWT
        this.UserConnecter= this.userAuthService.GetMailConnecter();
        //Get User By Mail from Data base
        this.userService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
          this.user=data;
          console.log("**************");
          console.log(data);
        });
  }
    
  public logout() {
    this.userAuthService.clear();
   // this.router.navigate(['/home']);
  }

}
