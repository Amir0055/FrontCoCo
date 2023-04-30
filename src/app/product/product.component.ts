import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CherifService } from '../shared/cherif.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product: Product[] = [];
  
  
  nombreArticlesDansPanier: number = 0;



  constructor(private R: Router, private messervices :CherifService){}

  ngOnInit() {
    this.messervices.getAllproducts()
      .subscribe(
        (response: Product[]) => {
          console.log(this.product)
          this.product=response ;

        },
        (error: HttpErrorResponse) => {  
          console.log(error.message);
        }
      );
  }

  
  addToCart(productId: number) {
    this.messervices.addProductToCart(productId, 1).subscribe(() => {
      console.log('Product added to cart.');
      location.reload();
    });
  }
    

}
