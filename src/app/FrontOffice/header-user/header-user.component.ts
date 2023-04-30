import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CherifService } from 'src/app/shared/cherif.service';


@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})


export class HeaderUserComponent implements OnInit {

  numProducts!: number;

  cart !:Cart ;

  constructor(private R:Router,private messervices :CherifService) { }

  ngOnInit() {
    const cartId = 1; // ID du panier dont on veut connaître le nombre de produits
    this.messervices.getNumProducts(cartId).subscribe(
      numProducts => this.numProducts = numProducts,
      error => console.log(error)
    );
  }

  showdetails(){
    this.R.navigate(['/panier']);
  }

  


      
}
