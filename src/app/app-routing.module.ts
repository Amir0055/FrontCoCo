import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
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

const routes: Routes = [
  {path:'admin',
   component:AllTemplatesAdminComponent,
  children:[
    {
      path:'home',
      component:BodyAdminComponent
    },
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
    }
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
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
