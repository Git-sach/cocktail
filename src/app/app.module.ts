import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

import { APP_ROUTES } from './shared/app.routes';

import { FilterPipe } from './shared/pipes/filter.pipe';

import { SelectedDirective } from './shared/directives/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
