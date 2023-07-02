import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { DealersComponent } from './dealers/dealers.component';
import { ContactComponent } from './contact/contact.component';
import { PlumberComponent } from './plumber/plumber.component';
import { CivilComponent } from './civil/civil.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { PainterComponent } from './painter/painter.component';
import { TilesComponent } from './tiles/tiles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ConcreteComponent } from './concrete/concrete.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'dealers',
    component:DealersComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'plumber',
    component:PlumberComponent
  },
  {
    path:'painter',
    component:PainterComponent
  },
  {
    path:'furniture',
    component:FurnitureComponent
  },
  {
    path:'electrician',
    component:ElectricianComponent
  },
  {
    path:'tiles',
    component:TilesComponent
  },
  {
    path:'civil',
    component:CivilComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'concrete',
    component:ConcreteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


