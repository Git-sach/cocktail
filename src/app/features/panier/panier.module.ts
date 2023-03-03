import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';



@NgModule({
  declarations: [
    PanierContainerComponent,
    IngredientListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PanierModule { }
