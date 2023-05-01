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
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { AllProduitComponent } from './all-produit/all-produit.component';
import { AllshopComponent } from './allshop/allshop.component';
import { DetailsComponent } from './details/details.component';
import { NgxRatingModule } from 'ngx-rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ProductComponent } from './product/product.component';








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
    ShopComponent,
    AllProduitComponent,
    AllshopComponent,
    DetailsComponent,
    ProductComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    NgxStarRatingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
