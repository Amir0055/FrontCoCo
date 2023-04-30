import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { HttpErrorResponse } from '@angular/common/http';
import { Commande } from '../model/commande';
import { Router } from '@angular/router';
import { Produit_Cart } from '../model/produit-cart';
import { CherifService } from '../shared/cherif.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  idCart:number =1 ; // L'ID du panier 

  products: Product[] = [];
   /* new Product(1),
    new Product(2)
  ];*/

  produitcart:Produit_Cart[]=[
    new Produit_Cart(1,1),
    new Produit_Cart(1,2)
  ] ;

  listCommandes:Commande[] = [] ; 
  prod!:Product ;

  commande: Commande = new Commande(); 
  numProducts!: number;
  totalprice!:number ;

  coupon!:string;

  //quantiti?:number ;


  

  constructor(private R:Router,private messervices :CherifService,private cdr: ChangeDetectorRef) { }

  ngOnInit():void {
    this.messervices.getProductsFromCart(this.idCart)
      .subscribe( (response: Product[]) => {
        this.products=response ;

      },
      (error: HttpErrorResponse) => {  
        console.log(error.message);
      }
      )

      const cartId = 1; // ID du panier dont on veut connaître le nombre de produits
      this.messervices.getNumProducts(cartId).subscribe(
        numProducts => this.numProducts = numProducts,
        error => console.log(error)
      );

  
      this.messervices.gettotalprice(cartId).subscribe(
        totalprice => this.totalprice = totalprice,
        error => console.log(error)
      );
        this.getQuantities().then(quantities => {
          console.log(quantities); // liste de quantités de produits
        }).catch(error => {
          console.error(error);
        });

        for (const product of this.produitcart) {
        this.messervices.removeProduitFromCart(this.idCart,product.produit).subscribe(() => {
          console.log('Produit supprimé du panier avec succès');
          
        });}

  }

  quantities: {[key: number]: number} = {};

getQuantities(): Promise<number[]> {
  return new Promise<number[]>((resolve, reject) => {
    const quantities: number[] = [];
    for (const product of this.produitcart) {
      this.messervices.getquantity(this.idCart, product.produit)
        .subscribe(quantity => {
          product.quantity = quantity;
          this.cdr.detectChanges();
          quantities.push(quantity);
          if (quantities.length === this.produitcart.length) {
            resolve(quantities);
          }
        }, error => {
          reject(error);
        });
    }
  });
}

  paniervide():boolean{
    if(this.products !=null && this.numProducts!=0)
    return false;
    return true;
    }


    addToCart(productId: number) {
      this.messervices.addProductToCart(productId, 1).subscribe(() => {
        console.log('Product added to cart.');
        location.reload();
      });
    }

    deletfromCart(productId:number){
      this.messervices.deleteprodfromcart(productId,this.idCart)
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


  ajoutercommande(commandes: Commande,idcart: number,coupon:string) {   
    this.messervices.confirmCommande(commandes, idcart,coupon)
      .subscribe(
        (response: Commande) => {
          // Ajouter la commande créée à la liste des commandes
          this.listCommandes.push(response);

          // Calculer la date limite d'annulation
          const dateLimiteAnnulation = new Date(commandes.dateCmd);
          dateLimiteAnnulation.setHours(dateLimiteAnnulation.getHours() + 5);

          // Afficher l'alerte
          alert("Vous pouvez annuler cette commande avant le " + dateLimiteAnnulation.toLocaleString());

        },
        (error: HttpErrorResponse) => {
          console.log("fama mochkla");
        }
      );
}


showcommandes(){
  this.R.navigate(['/user/commande']);
}

commencerachat(){
  this.R.navigate(['/user/product']);
}


  }

  

