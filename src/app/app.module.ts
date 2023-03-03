import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { SelectedDirective } from './shared/directives/selected.directive';
import { APP_ROUTES } from './shared/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
    // on retir ces deux Modules pour utiliser le Lazy Loading
    //CocktailModule,
    //PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
