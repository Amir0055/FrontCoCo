import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  //URL du backEnd
  url = "http://localhost:8088/produits";
  

  getAllproducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

 


  getoneproduct(idProduit:number):Observable<Product> {
    const url = `${this.url}/${idProduit}`;
    return this.http.get<Product>(url);
  }








}
