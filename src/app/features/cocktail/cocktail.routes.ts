import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CocktailDetailsComponent } from "./cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailFormComponent } from "./cocktail-container/cocktail-form/cocktail-form.component";

export const COCKTAIL_ROUTES: Routes = [
  {path: '', component: CocktailContainerComponent,
  children: [
    {path: 'new', component: CocktailFormComponent},
    {path: ':index/edit', component: CocktailFormComponent},
    {path: ':index', component: CocktailDetailsComponent},
    {path: '', redirectTo: '0', pathMatch: 'full'}
  ]}
]
