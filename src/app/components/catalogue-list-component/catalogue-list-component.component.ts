import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../Models/catalogue';
import { CatalogueService } from '../../services/catalogue-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list-component.component.html',
  styleUrls: ['./catalogue-list-component.component.css']
})
export class CatalogueListComponent implements OnInit {

  catalogues: Catalogue[] = [];

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.catalogueService.getAllCatalogues().subscribe((catalogues: Catalogue[]) => {
      this.catalogues = catalogues;
    });
  }

  voirProduits(catalogueId: number): void {
    this.router.navigate(['user/catalogues/'+catalogueId+ '/produits']);
  }

  
  

}
