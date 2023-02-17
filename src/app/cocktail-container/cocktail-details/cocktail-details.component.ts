import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit{
  public cocktail!: Cocktail;

  constructor(
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService) {};

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if(cocktailIndex){
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    })
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
