import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
