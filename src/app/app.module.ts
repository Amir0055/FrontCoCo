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
import { CommandeComponent } from './commande/commande.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BodyFrontComponentComponent } from './body-front-component/body-front-component.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { TraitementCommandeComponent } from './BackOffice/traitement-commande/traitement-commande.component';
import { AdmindetailCommandeComponent } from './BackOffice/admindetail-commande/admindetail-commande.component';
import { CherifService } from './shared/cherif.service';

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
    CommandeComponent,
    BodyFrontComponentComponent,
    ProductComponent,
    CartComponent,
    DetailCommandeComponent,
    TraitementCommandeComponent,
    AdmindetailCommandeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CherifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
