import { NgModule } from '@angular/core';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { RouterModule } from '@angular/router';
import { PANIER_ROUTES } from './panier.routes';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    PanierContainerComponent,
    IngredientListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(PANIER_ROUTES)
  ]
})
export class PanierModule { }
