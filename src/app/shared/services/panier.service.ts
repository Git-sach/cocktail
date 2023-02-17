import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public ingredients$: BehaviorSubject<Ingredient[] | null> = new BehaviorSubject<Ingredient[] | null>(null);

  constructor() { }

  public addToPanier(ingredients: Ingredient[]): void {
    //ingredients: [{ name: citron, quantity: 1 }, { name: fraise, quantity: 1 }]
    //currentValue: [{ name: citron, quantity: 1 }, { name: fraise, quantity: 1 }]
    //Le but est de merger ces 2 tableaux

    const currentValue = this.ingredients$.value;

    if(currentValue){

       const obj = [...currentValue, ...ingredients].reduce((acc: {[x: string]: number}, value: Ingredient) => {
        if(acc[value.name]){
          acc[value.name] += value.quantity;
        } else {
          acc[value.name] = value.quantity;
        }
        return acc;
       }, {});
       //obj: {citron:2, fraise:2}

       const result = Object.keys(obj).map(key => ({
        name: key,
        quantity: obj[key]
       }));
       //result: [{ name: citron, quantity: 2 }, { name: fraise, quantity: 2 }]

       this.ingredients$.next(result);

    } else {

      this.ingredients$.next(ingredients);

    }
  }
}
