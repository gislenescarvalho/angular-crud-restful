import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { routing } from './app.routing';
import { registerRouting } from './register/register.routing';
import { reportRouting } from './report/report.routing';

import { RegisterModule } from './register/register.module';
import { ReportModule } from './report/report.module';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    RegisterModule,
    ReportModule,
    ChartsModule,
    registerRouting,
    reportRouting,
    routing,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
