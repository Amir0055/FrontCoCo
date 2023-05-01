import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/Models/shop';
import { ShopService } from 'src/app/Service/shop.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
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

  

}
