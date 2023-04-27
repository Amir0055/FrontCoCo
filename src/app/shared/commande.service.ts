import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../model/commande';


const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  url="http://localhost:8088/Commande";
  apiUrl='http://localhost:8088/stripe/paiement';
  baseUrl="http://localhost:8080/carts" ;
  

  constructor(private http:HttpClient) { }

  
  getAllCommande(idCart: number): Observable<Commande[]> {
    const url = `${this.url}/retrieve-all-Commandes/${idCart}`;
    return this.http.get<Commande[]>(url);
  }
  
  getCommandeById(idCart: number, idCommande: number): Observable<Commande> {
    const url = `${this.url}/retrieve-Commande/${idCart}/${idCommande}`;
    return this.http.get<Commande>(url);
  }

  getCommandeByIdd( idCommande: number): Observable<Commande> {
    const url = `${this.url}/retrieve-Commande/${idCommande}`;
    return this.http.get<Commande>(url);
  }

    ConfirmCommande(idcart: FormData): Observable<any> {
      return this.http.post<Commande>(this.url + `/Confirm-Commande`,idcart);
    }

   
     deleteCommande(id: number): Observable<any> {
      const url = `${this.url+`/remove-Commande`}/${id}`;
      return this.http.delete(url);
    }
  
  confirmCommande(commande: Commande, idCart: number): Observable<Commande> {
    const url = `${this.url}/Confirm-Commande/${idCart}`;
    return this.http.post<Commande>(url, commande);
  }

  effectuerPaiement(commandeId: number, devise: string, token: string): Observable<any> {
    const body = { commandeId, devise, token };
    return this.http.post<any>(this.apiUrl, body);
  }

  getProductsNames(cartId: number): Observable<string[]> {
    const url = `${this.baseUrl}/${cartId}/products/names`;
    return this.http.get<string[]>(url)
     
  }


    


    
}
