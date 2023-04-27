
import { Commande } from './commande';

export class Cart {

  id!: number;
  nbProd!: number;
  totalPrice!: number;
  totalWeight!: number;
  commandes!: Commande[];

}