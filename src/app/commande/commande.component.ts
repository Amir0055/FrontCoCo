import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/commande.service';
import { Commande } from '../model/commande';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})


export class CommandeComponent implements OnInit {

  commande: Commande = new Commande();
  listCommandes:Commande[] = [] ; 
  commandes: any[] = [];

  idCart:number =1 ;
  
  Products : Product []=[];
  productnames : any ;
  
constructor(private commandeService:CommandeService,private R: Router,private http :HttpClient) {}

ngOnInit() {
  
  this.commandeService.getAllCommande(this.idCart).subscribe(
    (response: Commande[]) => {
      console.log(response);
      this.listCommandes = response;

    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  );
}

deleteCommande(id: number) {
  this.commandeService.deleteCommande(id).subscribe(
    () => {
      console.log(`Commande ${id} supprimée avec succès`);
      // Retirer la commande supprimée de la liste des commandes
      this.listCommandes = this.listCommandes.filter(c => c.id !== id);
    },
    (error: HttpErrorResponse) => {
      console.log("La commande ne peut plus être annulée");
    }
  )
  location.reload();
}

getCommandebyid(idCart:number ,idcommande: number) {
  this.commandeService.getCommandeById(idCart,idcommande)
    .subscribe(
      (response: Commande) => {
        console.log(response);
        // Affecter la commande récupérée à une variable
        const commande = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
}
getCommandebyidd(idcommande: number) {
  this.commandeService.getCommandeByIdd(idcommande)
    .subscribe(
      (response: Commande) => {
        console.log(response);
        // Affecter la commande récupérée à une variable
        const commande = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
}
onSubmit() {
  const idCart = 1;
    this.commandeService.confirmCommande(this.commande,idCart).subscribe(
      data => alert("commande ajoutée avec succés"),
      error => console.error("erreur")
    );
    location.reload();
}

payercommande(id:number){
  this.R.navigate(['/user/paiement',id]);
}
  devise!: string;
  token: string = "tok_visa" ;


  effectuerPaiement(commandeId: number, devise: string, token: string) {
    // Call the server-side API using the HttpClient
    this.http.post<any>(`http://localhost:8088/stripe)/paiement?commandeId=${commandeId}&devise=${devise}&token=${token}`, {}).subscribe(result => {
      // Handle the result here
      console.log(result);
      
    }, error => {
      // Handle the error here
      console.error(error);
      alert("paiement effectué avec succés");
    });
  }

  getProductsNames(cartId: number){
    this.commandeService.getProductsNames(this.idCart).subscribe( (response: any) => {
      this.productnames=response ;}

    )
  }
   
}



