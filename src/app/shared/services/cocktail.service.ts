import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails$: BehaviorSubject<Cocktail[] | []> = new BehaviorSubject<Cocktail[] | []>([]);

  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      // Opérateur que l'on utilise pour vérifier si on a des cocktails
      filter((cocktails: Cocktail[]) => {
        return cocktails != null
      }),
      // Opérateur que l'on utilise pour couper le flux une fois l'information apssé dans le first
      // Cela permet de ne pas gérer l'unsubscibe
      // first(),
      map((cocktails: Cocktail[]) => {
        return cocktails[index]
      })
    )
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http.post<Cocktail>('https://restapi.fr/api/cocktailadrien', cocktail)
      .pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next([...value, savedCocktail])
        })
      )
  }

  public editCocktail(cocktailId: string, editedCocktail: Cocktail): Observable<Cocktail> {
    return this.http.patch<Cocktail>(
      `https://restapi.fr/api/cocktailadrien/${cocktailId}`, editedCocktail).pipe(
        tap((savedCocktail: Cocktail) => {
          const value = this.cocktails$.value;
          this.cocktails$.next(
            value.map((cocktail: Cocktail) => {
              if(cocktail.name === editedCocktail.name) {
                return savedCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );

  }

  // Nous allons faire appèle a cette requête dans app.component
  // car c'est un component qui s'instancie au démarage de l'application
  // et qui n'est pas rappelé même quand on navigue sur l'app
  // (pour ne pas faire trop de requêtes http)
  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[] | []>('https://restapi.fr/api/cocktailadrien').pipe(
      // opérateur qui ne fait rien mais qui prend en paramètre un cb
      // et qui nous permet de transmettre la liste de cocktail au behaviorSubject (methode éléguante)
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails)
      })
    )
  }

  constructor(private http: HttpClient) {
    //this.seed();
  }

  public seed (){
    this.http.post('https://restapi.fr/api/cocktailadrien', {
      name: "Mojito",
      img:
        "https://assets.afcdn.com/recipe/20180705/80345_w1024h768c1cx4150cy1741.jpg",
      description:
        "The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.",
      ingredients: [
        {
          name: 'Perrier',
          quantity: 1
        },
        {
          name: 'Manthe',
          quantity: 1
        }
      ]
    }).subscribe();


    this.http.post('https://restapi.fr/api/cocktailadrien',
    {
      name: "Cosmopolitan",
      img:
        "data:image/jpeg;base64,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",
      description:
        "The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.",
      ingredients: [
        {
          name: 'Perrier',
          quantity: 1
        },
        {
          name: 'Manthe',
          quantity: 1
        }
      ]
    }).subscribe();

    this.http.post('https://restapi.fr/api/cocktailadrien',
    {
      name: "Mai Tai",
      img:
        "data:image/jpeg;base64,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",
      description:
        "The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.",
      ingredients: [
        {
          name: 'Perrier',
          quantity: 1
        },
        {
          name: 'courgette',
          quantity: 1
        }
      ]
    }).subscribe();
  }
}
