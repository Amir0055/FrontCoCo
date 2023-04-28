import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommandeService } from '../shared/commande.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit{

  constructor(private commandeService:CommandeService,private ActR:ActivatedRoute) {}

  idcommande!: number ;
  commande!: Commande;
  idCart:number =1 ;

 

    ngOnInit(): void {
      this.idcommande=this.ActR.snapshot.params['id'];
      this.commandeService.getCommandeById(this.idCart,this.idcommande).subscribe(data => this.commande=data);
    }
  
}
