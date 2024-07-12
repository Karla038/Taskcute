import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasckComponent } from './tasck/tasck.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TaskTabComponent } from './task-tab/task-tab.component';



@NgModule({
  declarations: [
    AppComponent,
    TasckComponent,
    FooterComponent,
    HeaderComponent,
    TaskTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule, // Importa FormsModule aquí
    BrowserAnimationsModule, // Necesario para ngx-toastr
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Aparece en la parte superior derecha
      timeOut: 5000,
      preventDuplicates: true,
      closeButton: true // Habilita el botón para cerrar
    }),
    AppRoutingModule // Agrega el AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
