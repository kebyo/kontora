import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordComponent} from "./record/record.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    // redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    component: RecordComponent,
    path: 'records',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
