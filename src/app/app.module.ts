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
import { VehiculeComponentComponent } from './vehicule-component/vehicule-component.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CreatelivComponent } from './createliv/createliv.component';
import { CreatecarComponent } from './createcar/createcar.component';
import { AssaigncartouserComponent } from './assaigncartouser/assaigncartouser.component';
import { MapComponent } from './map/map.component';

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
    VehiculeComponentComponent,
    AddCarComponent,
    UpdatecarComponent,
    DeliveryComponent,
    CreatelivComponent,
    CreatecarComponent,
    AssaigncartouserComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
