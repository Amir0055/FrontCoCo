import {Component, OnInit} from '@angular/core';
import {VehiculeServiceService} from "../vehicule-service.service";
import {Router} from "@angular/router";
import {Vehicule} from "../Models/vehicule";

@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent implements OnInit{
  constructor(private service:VehiculeServiceService,private router: Router) { }
  car:Vehicule= new Vehicule();
  ngOnInit(): void {

  }
addcar(id:number){
    this.service.assaigncartouser(id,this.car).subscribe(()=>this.router.navigateByUrl("/user/home"))
}
}
