import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordComponent} from "./record/record.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {RecordFormComponent} from "./record-form/record-form.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    component: AppComponent,
    path: '',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    component: RecordComponent,
    path: 'records',
  },
  {
    component: RecordFormComponent,
    path: 'record-form',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: NotFoundComponent,
    path: '*',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
