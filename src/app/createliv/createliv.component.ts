import {Component, OnInit} from '@angular/core';
import {Livraison} from "../Models/Livraison";
import {Router} from "@angular/router";
import {DeleveryserviceService} from "../deleveryservice.service";

@Component({
  selector: 'app-createliv',
  templateUrl: './createliv.component.html',
  styleUrls: ['./createliv.component.css']
})
export class CreatelivComponent implements OnInit{
  Liv: Livraison=new Livraison();
  region!:string;
  constructor(private service:DeleveryserviceService, private router:Router) {
  }
  public Addliv(){
    this.service.addLiv(this.region,this.Liv).subscribe(()=>this.router.navigateByUrl("/admin/livraison"))

}



  ngOnInit(): void {
  }

}
