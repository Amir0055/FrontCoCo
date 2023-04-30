import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { CommandeComponent } from './commande/commande.component';
import { BodyFrontComponentComponent } from './body-front-component/body-front-component.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { TraitementCommandeComponent } from './BackOffice/traitement-commande/traitement-commande.component';
import { AdmindetailCommandeComponent } from './BackOffice/admindetail-commande/admindetail-commande.component';

const routes: Routes = [
  {path:'admin',component:AllTemplatesAdminComponent,
  children:[{path:'home',component:BodyAdminComponent},]},
   
  {path:'user',component:AllTemplateUserComponent,
  children:[{path:'home', component:BodyUserComponent},]},

  {path:'user',component:AllTemplateUserComponent,
  children:[{path:'commande', component:CommandeComponent},]},

  {path:'user',component:AllTemplateUserComponent,
  children:[{path:'product', component:ProductComponent},]},

  {path:'user',component:AllTemplateUserComponent,
  children:[{path:'panier', component:CartComponent},]},

  {path:'user',component:AllTemplateUserComponent,
  children:[{path:'detailcommande/:id', component:DetailCommandeComponent},]},

  {path:'admin',component:AllTemplatesAdminComponent,
  children:[{path:'admindetailcommande/:id', component:AdmindetailCommandeComponent},]},

  {path:'admin',component:AllTemplatesAdminComponent,
  children:[{path:'traitementCommande', component:TraitementCommandeComponent},]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
