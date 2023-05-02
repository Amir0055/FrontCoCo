 snoussi
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Models/shop';
import { ShopService } from 'src/app/Service/shop.service';


import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

 main

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
 snoussi
export class BodyUserComponent implements OnInit
{
  shops: Shop []=[];
  constructor(private service:ShopService) { }
  ngOnInit(): void {
    this.service.getShop().subscribe((data:Shop[])=>{
      console.log(data)
      this.shops=data

  });
}

  


export class BodyUserComponent implements OnInit {
  UserConnecter!: string;

  constructor( private userService:UserService,
    private userAuthService:UserAuthService ){}
    

  ngOnInit(): void {
    //get email from JWT
    this.UserConnecter= this.userAuthService.GetMailConnecter();
    //Get User By Mail from Data base
    this.userService.getConnectedUser(this.UserConnecter).subscribe((data)=>{
      console.log("**************");
      console.log(data);
    });
  } main

}
