import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { CherifService } from '../shared/cherif.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit{
  

  constructor(private messervices :CherifService, private ActR:ActivatedRoute,private http :HttpClient) {}

  idcommande!: number ;
  commande!: Commande;
  idCart:number =1 ;

  url="http://localhost:8088/Commande";

    ngOnInit(): void {
      this.idcommande=this.ActR.snapshot.params['id'];
      this.messervices.getCommandeById(this.idCart,this.idcommande).subscribe(data => this.commande=data);
    }

    telechargerFacture(commandId: number) {
      this.http.get('http://localhost:8088/Commande/facture/' + commandId, { responseType: 'blob' }).subscribe((blob: Blob) => {
        const file = new Blob([blob], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      });
    
  }

  accepterCommande() {
    const commandeId = 1; // ID de la commande à accepter
    const url = `${this.url}/${commandeId}/accepter`;
    this.http.put(url, {}).subscribe((response) => {
      console.log('La commande a été acceptée avec succès.');
    });
  }

  refuserCommande() {
    const commandeId = 2; // ID de la commande à refuser
    const url = `${this.url}/${commandeId}/refuser`;
    this.http.put(url, {}).subscribe((response) => {
      console.log('La commande a été refusée avec succès.');
    });
  }
  
}