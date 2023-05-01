import {Component, OnInit} from '@angular/core';
import {VehiculeServiceService} from "../vehicule-service.service";
import {DeleveryserviceService} from "../deleveryservice.service";
import {Router} from "@angular/router";
import {Livraison} from "../Models/Livraison";

@Component({
  selector: 'app-listlivuser',
  templateUrl: './listlivuser.component.html',
  styleUrls: ['./listlivuser.component.css']
})
export class ListlivuserComponent implements OnInit{
  constructor(public service: VehiculeServiceService,private service2:DeleveryserviceService,private router:Router) {
  }
  listliv!: Livraison[];

  ngOnInit(): void {

    this.service2.listforuser(1).subscribe(ListLiv=>this.listliv =ListLiv);
  }

  validate(id:number){
    this.service2.validate(id).subscribe(()=>this.service2.listforuser(id).subscribe(res=>this.listliv=res));

  }

}
