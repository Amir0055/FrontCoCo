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

import {VehiculeComponentComponent} from "./vehicule-component/vehicule-component.component";
import {AddCarComponent} from "./add-car/add-car.component";
import {UpdatecarComponent} from "./updatecar/updatecar.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {CreatelivComponent} from "./createliv/createliv.component";
import {CreatecarComponent} from "./createcar/createcar.component";
import {AssaigncartouserComponent} from "./assaigncartouser/assaigncartouser.component";
import {MapComponent} from "./map/map.component";
import {UpLivComponent} from "./up-liv/up-liv.component";
import {ListlivuserComponent} from "./listlivuser/listlivuser.component";


import { AuthGuard } from './_Auth/auth.guard';
import { TestAccesComponent } from './test-acces/test-acces.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { PageNotFoundComponent } from './FrontOffice/page-not-found/page-not-found.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ResetPasswordComponent } from './FrontOffice/reset-password/reset-password.component';
import { ResetPasswordDirectComponent } from './FrontOffice/reset-password-direct/reset-password-direct.component';
import { AssociatioInfoComponent } from './BackOffice/associatio-info/associatio-info.component';
import { GestionProfileComponent } from './BackOffice/gestion-profile/gestion-profile.component';
import { UpdateProfileComponent } from './BackOffice/update-profile/update-profile.component';
import { ListUserComponent } from './BackOffice/list-user/list-user.component';
import { MailboxesComponentComponent } from './BackOffice/mailboxes-component/mailboxes-component.component';
import { ChartsComponent } from './BackOffice/charts/charts.component';
import { MoreInfoUserComponent } from './BackOffice/more-info-user/more-info-user.component';

const routes: Routes = [
 snoussi
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
  
  {path:'admin',
   component:AllTemplatesAdminComponent,
  children:[
    {
      path:'home',
 component:BodyAdminComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}  },
    {
      path: 'Listvecule',component: VehiculeComponentComponent
    },
    {
      path: 'AddCar',component: AddCarComponent
    },
    {
      path: 'updatecar/:id',component: UpdatecarComponent
    },
    {
      path: 'livraison',component: DeliveryComponent
    },
    {
      path: 'Createliv',component: CreatelivComponent
    },
    {
      path: 'assaignusercar',component: AssaigncartouserComponent
    },
    {
      path: 'updateLiv/:id',component: UpLivComponent
    },
     {
      path:'listuser',
      component:ListUserComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    { path: 'Detailsusers/:id', component: MoreInfoUserComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']} }
    ,{
      path:'AssociationInfo',
      component:AssociatioInfoComponent,
    },
    {
      path:'GestionProfile',
      component:GestionProfileComponent,
    },
    {
      path:'UpdateProfile',
      component:UpdateProfileComponent,
    },
    {
      path:'Mail',
      component:MailboxesComponentComponent,
    },

  ]
  },

  {path:'user',
   component:AllTemplateUserComponent,
  children:[
    {
      path:'home',
      component:BodyUserComponent
    },

    {
      path:'addcar',
      component:CreatecarComponent
    }
    ,
    {
      path:'map',
      component:MapComponent
    },
    {
      path:'listliv',
      component:ListlivuserComponent
    },
        {path:'login',
    component:TestAccesComponent},
    {path:'register',
    component:RegisterComponent},
    {path:'ResetPassword',
    component:ResetPasswordComponent},
    {path:'ResetPasswordDirect',
    component:ResetPasswordDirectComponent},
    {path:'Chart',
    component:ChartsComponent},
 
  ]
  },


 
  {path:'forbidden',
  component:ForbiddenComponent},
  {path:'NotFound',
  component:PageNotFoundComponent},

 main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
