import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError } from 'rxjs';
import { Product } from '../model/product';


const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");


@Injectable({
  providedIn: 'root'
})
export class CartService {
  carturl ='http://localhost:8080/Cart/retrieve-Product_in_cart/{{prodcart-id}}'

  URL="  http://localhost:8080/Cart/retrieve-Product_in_cart/{{idCart}}"
  

  product: Product[] = [];

  private nombreArticlesSubject = new Subject<number>();

  constructor(private http:HttpClient) { }

  getProductsFromCart(cartId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8088/Cart/retrieve-Product_in_cart/${cartId}`);
  }

  addProductToCart(idProduit: number, idCart: number) {
    return this.http.post(`http://localhost:8088/Cart/panier/ajouter-produit/${idProduit}/${idCart}`, {});
  }

  deleteprodfromcart(idProduit: number, idCart: number){
    return this.http.delete(`http://localhost:8088/Cart/panier/supprimer-produit/${idProduit}/${idCart}`, {});
  }

  nombreArticlesDansPanier(): Observable<number> {
    return this.nombreArticlesSubject.asObservable();
  }

  getNumProducts(cartId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8088/Cart/numProducts/${cartId}`);
  }


  gettotalprice(cartId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8088/Cart/totalprice/${cartId}`);
  }


  getquantity(cartId: number , produitId :number): Observable<number> {
    return this.http.get<number>(`http://localhost:8088/Produit_cart/${cartId}/products/${produitId}/quantity`);
    
  }



  



 
}
