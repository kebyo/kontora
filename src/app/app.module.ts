import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RecordComponent} from "./record/record.component";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecordFormComponent } from './record-form/record-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StorageService} from "./storage/storage.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordComponent,
    NotFoundComponent,
    RecordFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
