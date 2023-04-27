import { Cart } from './cart';

export enum Etat {
  EN_ATTENTE = 'WAITING',
  EN_COURS_DE_Traitement = 'EDITABLE',
  VALIDe = 'VALIDATED',
  ANNULE = 'REFUSED'
}

export enum PaymentMode {
  CARTE_BANCAIRE = 'TRANSFER',
  ESPECE = 'CASH'
  
}

export class Commande {
  id!: number;
  dateCmd!: Date;
  shopName!: string;
  shopAddress!: string;
  buyerEmail!: string;
  buyerAddress!: string;
  tax!: number;
  nbProd!: number;
  totalPrice!: number;
  currency!: string;
  totalWeight!: number;
  //lesProduits!: string[];
  archive!: boolean;
  description!: string;
  etat!: Etat;
  paymentMode!: PaymentMode;
  methode!: string;
  commandeCart!: Cart;
}
