import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Cont1Component } from './cont1/cont1.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    MenuComponent,
    FooterComponent,
    AppComponent,
    LoginComponent,
    Cont1Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
