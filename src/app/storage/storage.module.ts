import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";
import {RecordComponent} from "../record/record.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {RecordFormComponent} from "../record-form/record-form.component";
import {LoginComponent} from "../login/login.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [HttpClientModule]
})
export class AppModule { }
