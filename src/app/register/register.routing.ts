import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import {RegisterFormComponent} from './register-form/register-form.component';

const registerRoutes: Routes = [
  { path: 'users', component: RegisterComponent, pathMatch: 'full' },
  { path: 'users/new', component: RegisterFormComponent},
  { path: 'users/:id', component: RegisterFormComponent}
];

export const registerRouting = RouterModule.forChild(registerRoutes);
