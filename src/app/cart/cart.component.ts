import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Product } from '../model/product';
import { HttpErrorResponse } from '@angular/common/http';
import { CommandeService } from '../shared/commande.service';
import { Commande } from '../model/commande';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  idCart:number =1 ; // L'ID du panier 

  products: Product[] = [];
  listCommandes:Commande[] = [] ; 
  prod!:Product ;

  commande: Commande = new Commande(); 
  numProducts!: number;
  totalprice!:number ;

  quantity?:number ;
  produitId: number =2;

  

  constructor(private cartService: CartService, private commandeService: CommandeService,private R:Router,private Prodservice :ProductService) { }

  ngOnInit() {
    this.cartService.getProductsFromCart(this.idCart)
      .subscribe( (response: Product[]) => {
        this.products=response ;

      },
      (error: HttpErrorResponse) => {  
        console.log(error.message);
      }
      )

      const cartId = 1; // ID du panier dont on veut connaître le nombre de produits
      this.cartService.getNumProducts(cartId).subscribe(
        numProducts => this.numProducts = numProducts,
        error => console.log(error)
      );

  
      this.cartService.gettotalprice(cartId).subscribe(
        totalprice => this.totalprice = totalprice,
        error => console.log(error)
      );

      this.cartService.getquantity(cartId,this.produitId).subscribe(
        quantity => this.quantity = quantity,
        error => console.log(error)
      );


   
  }

  paniervide():boolean{
    if(this.products !=null && this.quantity!=0)
    return false;
    return true;
    }

  

  deletfromCart(productId:number){
    this.cartService.deleteprodfromcart(productId,this.idCart)
    .subscribe(
      () => {
        console.log(`le produit ${productId} supprimée avec succès`);
        // Retirer la commande supprimée de la liste des commandes
        this.products = this.products.filter(c => c.id !== productId);
      },
      (error: HttpErrorResponse) => {
        console.log("erreur");
      }
    )
    location.reload();
  }

  ajoutercommande(commandes: Commande,idcart: number) {   
    this.commandeService.confirmCommande(commandes, idcart)
      .subscribe(
        (response: Commande) => {
          console.log(response);
          // Ajouter la commande créée à la liste des commandes
          this.listCommandes.push(response);
        },
        (error: HttpErrorResponse) => {
          console.log("fama mochkla");
        }
      )
      location.reload();
}

showcommandes(){
  this.R.navigate(['/user/commande']);
}

commencerachat(){
  this.R.navigate(['/user/product']);
}


  }

  

