import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginTemplateDrivenFormComponent } from './login-template-driven-form/login-template-driven-form.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateDrivenFormComponent,
    LoginReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
