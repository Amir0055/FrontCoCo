
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' ;
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { CatalogueListComponent } from './components/catalogue-list-component/catalogue-list-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminCatalogueListComponent } from './components/admin-catalogue-list/admin-catalogue-list.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminAllproductlistComponent } from './components/admin-allproductlist/admin-allproductlist.component';
import { AddProductToCatalogueComponent } from './components/add-product-to-catalogue/add-product-to-catalogue.component';





const routes: Routes = [
  {path:'admin',
   component:AllTemplatesAdminComponent,
  children:[
    {path:'home',component:BodyAdminComponent},
    { path: 'catalogues', component: AdminCatalogueListComponent },
    { path: 'catalogues/:id/produits', component: AdminProductListComponent },
    { path: 'produits', component: AdminAllproductlistComponent },
    { path: 'produits/:id', component: AddProductToCatalogueComponent },
  ]
  }, 
  {path:'user',
   component:AllTemplateUserComponent,
  children:[
    {path:'home',component:BodyUserComponent},
    { path: 'catalogues', component: CatalogueListComponent },
    { path: 'catalogues/:id/produits', component: ProductListComponent }

  ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
