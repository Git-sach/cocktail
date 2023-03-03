import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  //pathMatch full, pour dire que la chaine de carac vide n'est pas un prefix, mais doit matcher exactement avec la chaine vide (car toutes les chaines de carac commences par une chaine vide)
  {path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  //modules chargés en lazy loading
  {path: 'cocktails', loadChildren: () => import('../features/cocktail/cocktail.module').then(m => m.CocktailModule)},
  {path: 'panier', loadChildren: () => import('../features/panier/panier.module').then( m => m.PanierModule)}
]
