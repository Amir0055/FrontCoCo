import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../../Models/produit';
import { CatalogueService } from '../../services/catalogue-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produits: Produit[] = [];

  constructor(
    private catalogueService: CatalogueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const catalogueId = this.route.snapshot.params['id'];
    this.catalogueService.getProduitsByCatalogueId(catalogueId).subscribe((produits: Produit[]) => {
      this.produits = produits;
    });
  }
  
}
