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
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ResetPasswordComponent } from './FrontOffice/reset-password/reset-password.component';
import { ResetPasswordDirectComponent } from './FrontOffice/reset-password-direct/reset-password-direct.component';
import { AssociatioInfoComponent } from './BackOffice/associatio-info/associatio-info.component';
import { GestionProfileComponent } from './BackOffice/gestion-profile/gestion-profile.component';
import { UpdateProfileComponent } from './BackOffice/update-profile/update-profile.component';

const routes: Routes = [
  
  {path:'admin',
   component:AllTemplatesAdminComponent,
  children:[
    {
      path:'home',
      component:BodyAdminComponent,canActivate:[AuthGuard],data:{autority:['ADMIN']}
    },
    {
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
    {path:'register',
    component:RegisterComponent},
    {path:'ResetPassword',
    component:ResetPasswordComponent},
    {path:'ResetPasswordDirect',
    component:ResetPasswordDirectComponent},
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
