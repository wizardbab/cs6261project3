import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './tournament/hello/hello.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'brackets', component: BracketsComponent },
  { path: '**', redirectTo: '/hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
