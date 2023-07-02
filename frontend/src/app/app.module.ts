import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { DealersComponent } from './dealers/dealers.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PainterComponent } from './painter/painter.component';
import { PlumberComponent } from './plumber/plumber.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { TilesComponent } from './tiles/tiles.component';
import { CivilComponent } from './civil/civil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ConcreteComponent } from './concrete/concrete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectComponent,
    DealersComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    PainterComponent,
    PlumberComponent,
    ElectricianComponent,
    FurnitureComponent,
    TilesComponent,
    CivilComponent,
    DashboardComponent,
    FeedbackComponent,
    ConcreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
