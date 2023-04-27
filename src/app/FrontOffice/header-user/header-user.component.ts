import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Commande } from 'src/app/model/commande';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/shared/cart.service';
import { CommandeService } from 'src/app/shared/commande.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})


export class HeaderUserComponent implements OnInit {

  numProducts!: number;

  cart !:Cart ;

  constructor(private R:Router,private cartService: CartService) { }

  ngOnInit() {
    const cartId = 1; // ID du panier dont on veut connaître le nombre de produits
    this.cartService.getNumProducts(cartId).subscribe(
      numProducts => this.numProducts = numProducts,
      error => console.log(error)
    );
  }

  showdetails(){
    this.R.navigate(['/panier']);
  }

  


      
}
