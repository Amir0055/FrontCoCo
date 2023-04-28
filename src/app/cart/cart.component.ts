import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Product } from '../model/product';
import { HttpErrorResponse } from '@angular/common/http';
import { CommandeService } from '../shared/commande.service';
import { Commande } from '../model/commande';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Produit_Cart } from '../model/produit-cart';

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

  //quantiti?:number ;


  

  constructor(public cartService: CartService, private commandeService: CommandeService,private R:Router,private Prodservice :ProductService,private cdr: ChangeDetectorRef) { }

  ngOnInit():void {
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

    /*  for (const product of this.produitcart) {
        this.cartService.getquantity(cartId, product.produit)
          .subscribe(quantity => {
            product.quantity = quantity;
            this.cdr.detectChanges();
            console.log(quantity)
          });
        }*/

        this.getQuantities().then(quantities => {
          console.log(quantities); // liste de quantités de produits
        }).catch(error => {
          console.error(error);
        });
     

   
  }

  quantities: {[key: number]: number} = {};

/*getQuantities(): void {
  for (const product of this.produitcart) {
    this.cartService.getquantity(this.idCart, product.produit)
      .subscribe(quantity => {
        product.quantity = quantity;
        this.cdr.detectChanges();
        console.log(quantity)
      });
  }
}*/

getQuantities(): Promise<number[]> {
  return new Promise<number[]>((resolve, reject) => {
    const quantities: number[] = [];
    for (const product of this.produitcart) {
      this.cartService.getquantity(this.idCart, product.produit)
        .subscribe(quantity => {
          product.quantity = quantity;
          this.cdr.detectChanges();
          console.log(quantity);
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
      this.cartService.addProductToCart(productId, 1).subscribe(() => {
        console.log('Product added to cart.');
        location.reload();
      });
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

  

