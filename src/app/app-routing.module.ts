import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { AuthGuard } from './_Auth/auth.guard';
import { TestAccesComponent } from './test-acces/test-acces.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { PageNotFoundComponent } from './FrontOffice/page-not-found/page-not-found.component';

const routes: Routes = [
  
  {path:'admin',
   component:AllTemplatesAdminComponent,
  children:[
    {
      path:'home',
      component:BodyAdminComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
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
    {path:'login',
    component:TestAccesComponent},

  ]
  },
  {path:'forbidden',
  component:ForbiddenComponent},
  {path:'NotFound',
  component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
