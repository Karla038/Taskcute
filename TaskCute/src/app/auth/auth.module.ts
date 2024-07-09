import { RegisterComponent } from "./register/register.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      // Todo: Componentes
    RegisterComponent

   ],
  imports: [
    NgOptimizedImage,
      BrowserModule,
      CommonModule,
      // LayoutModule,
      RouterLink,
      RouterModule
  ],
})
export class AuthModule {}
