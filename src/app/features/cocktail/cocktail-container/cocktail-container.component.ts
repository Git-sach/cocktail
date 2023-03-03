import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent {
  public cocktails$: Observable<Cocktail[]> = this.cocktailService.cocktails$;

  constructor(private cocktailService: CocktailService) {};
}
