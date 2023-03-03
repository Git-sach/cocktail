import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "src/app/features/cocktail/cocktail-container/cocktail-container.component";
import { CocktailDetailsComponent } from "src/app/features/cocktail/cocktail-container/cocktail-details/cocktail-details.component";
import { CocktailFormComponent } from "src/app/features/cocktail/cocktail-container/cocktail-form/cocktail-form.component";
import { PanierContainerComponent } from "../features/panier/panier-container/panier-container.component";

export const APP_ROUTES: Routes = [
  //pathMatch full, pour dire que la chaine de carac vide n'est pas un prefix, mais doit matcher exactement avec la chaine vide (car toutes les chaines de carac commences par une chaine vide)
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {
    path: 'cocktails', component: CocktailContainerComponent,
    children: [
      {path: 'new', component: CocktailFormComponent},
      {path: ':index/edit', component: CocktailFormComponent},
      {path: ':index', component: CocktailDetailsComponent},
      {path: '', redirectTo: '0', pathMatch: 'full'}
    ]
  },
  {path: 'panier', component: PanierContainerComponent},
]
