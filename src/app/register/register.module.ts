import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { RegisterService } from './shared/register.service';

import { MaterializeModule } from 'angular2-materialize';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MaterializeModule,
    Ng2SearchPipeModule
  ],
  declarations: [
  RegisterComponent,
  RegisterFormComponent],
  exports: [
    RegisterComponent
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
