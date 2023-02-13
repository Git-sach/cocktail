import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "../cocktail-container/cocktail-container.component";
import { PanierContainerComponent } from "../panier-container/panier-container.component";

export const APP_ROUTES: Routes = [
  //pathMatch full, pour dire que la chaine de carac vide n'est pas un prefix, mais dois matcher exactement avec la chaine vide (car toutes les chaines de carac commences par une chaine vide)
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  {path: 'cocktails', component: CocktailContainerComponent},
  {path: 'panier', component: PanierContainerComponent},
]
