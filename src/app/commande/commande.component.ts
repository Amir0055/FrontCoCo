import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CherifService } from '../shared/cherif.service';

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

  pdfUrl!: string;

  
constructor(private messervices :CherifService,private R: Router,private http :HttpClient) {}

ngOnInit() {
  
  this.messervices.getAllCommande(this.idCart).subscribe(
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
  this.messervices.deleteCommande(id).subscribe(
    () => {
      console.log(`Commande ${id} supprimée avec succès`);
      // Retirer la commande supprimée de la liste des commandes
      this.listCommandes = this.listCommandes.filter(c => c.id !== id);
      location.reload();
    },
    (error: HttpErrorResponse) => {
     alert("La commande ne peut plus être annulée");
    }
  )
  
}

getCommandebyid(idCart:number ,idcommande: number) {
  this.messervices.getCommandeById(idCart,idcommande)
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

showdetails(id:Number){
  this.R.navigate(['/user/detailcommande',id]);
}

getCommandebyidd(idcommande: number) {
  this.messervices.getCommandeByIdd(idcommande)
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
    this.messervices.confirmCommande(this.commande,idCart).subscribe(
      data => alert("commande ajoutée avec succés"),
      error => console.error("erreur")
    );
    location.reload();
}




  devise!: string;
  token: string = "tok_visa" ;

  parametre!: string;


  effectuerPaiement(commandeId: number, devise: string, token: string) {
    // Call the server-side API using the HttpClient
    this.http.post<any>(`http://localhost:8088/stripe)/paiement?commandeId=${commandeId}&devise=${devise}&token=${token}`, {}).subscribe(result => {
      // Handle the result here
      console.log(result);
      
      
    }, error => {
      // Handle the error here
      console.error(error);
      this.telechargerFacture(commandeId);
      alert("paiement effectué avec succés vous pouvez télécharger votre facture ");
    });
  }
telechargerFacture(commandId: number) {
    this.http.get('http://localhost:8088/Commande/facture/' + commandId, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const file = new Blob([blob], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  
}


  getProductsNames(cartId: number){
    this.messervices.getProductsNames(this.idCart).subscribe( (response: any) => {
      this.productnames=response ;}

    )
  }

  chercher(parametre: string): void {
    this.messervices.rechercher(parametre)
      .subscribe((response: Commande[]) => {
        console.log(response);
        this.listCommandes = response;},
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
    }
}



