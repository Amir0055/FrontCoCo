import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
