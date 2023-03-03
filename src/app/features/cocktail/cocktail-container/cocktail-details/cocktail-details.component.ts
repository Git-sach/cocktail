import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit, OnDestroy{
  public cocktail!: Cocktail;
  public subscription?: Subscription;

  constructor(
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {};

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if(this.subscription){
        this.subscription.unsubscribe();
      }
      this.subscription = this.cocktailService
        .getCocktail(+paramMap.get('index')!)
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    })
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
