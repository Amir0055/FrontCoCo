import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { ShopComponent } from './shop/shop.component';
import { AllProduitComponent } from './all-produit/all-produit.component';
import { AllshopComponent } from './allshop/allshop.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AllTemplatesAdminComponent,
    children: [
      {
        path: 'home',
        component: BodyAdminComponent,
      },
    ],
  },

  {
    path: 'user',
    component: AllTemplateUserComponent,
    children: [
      {
        path: 'home',
        component: BodyUserComponent,
      },
      { path: 'addShop', component: ShopComponent },

      { path: 'allproduit', component: AllProduitComponent },
      { path: 'allshop', component: AllshopComponent },
    ],
  },
  {path : 'details/:id', component : DetailsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
