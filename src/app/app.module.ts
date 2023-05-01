import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './BackOffice/header-admin/header-admin.component';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { FotterAdminComponent } from './BackOffice/fotter-admin/fotter-admin.component';
import { SideBarAdminComponent } from './BackOffice/side-bar-admin/side-bar-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { FotterUserComponent } from './FrontOffice/fotter-user/fotter-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { PageNotFoundComponent } from './FrontOffice/page-not-found/page-not-found.component';
import { ForbiddenComponent } from './FrontOffice/forbidden/forbidden.component';
import { TestAccesComponent } from './test-acces/test-acces.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './Services/user.service';
import { AuthInterceptor } from './_Auth/auth.interceptor.spec';
import { AuthGuard } from './_Auth/auth.guard';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ResetPasswordComponent } from './FrontOffice/reset-password/reset-password.component';
import { ResetPasswordDirectComponent } from './FrontOffice/reset-password-direct/reset-password-direct.component';
import { AssociatioInfoComponent } from './BackOffice/associatio-info/associatio-info.component';
import { GestionProfileComponent } from './BackOffice/gestion-profile/gestion-profile.component';
import { UpdateProfileComponent } from './BackOffice/update-profile/update-profile.component';
import { ListUserComponent } from './BackOffice/list-user/list-user.component';
import { MoreInfoUserComponent } from './BackOffice/more-info-user/more-info-user.component';
import { MailboxesComponentComponent } from './BackOffice/mailboxes-component/mailboxes-component.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ChartsComponent } from './BackOffice/charts/charts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    BodyAdminComponent,
    FotterAdminComponent,
    SideBarAdminComponent,
    AllTemplatesAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FotterUserComponent,
    HeaderUserComponent,
    TestAccesComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetPasswordDirectComponent,
    AssociatioInfoComponent,
    GestionProfileComponent,
    UpdateProfileComponent,
    ListUserComponent,
    MoreInfoUserComponent,
    MailboxesComponentComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    OAuthModule.forRoot(),

 
  ],
    providers: [ AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
