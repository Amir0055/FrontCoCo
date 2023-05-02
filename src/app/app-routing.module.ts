
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' ;
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';

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
      component:BodyAdminComponent
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
export class AppRoutingModule { }
