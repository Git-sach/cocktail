import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit{
  public cocktailForm: FormGroup = this.initForm(this.cocktail);
  public cocktail?: Cocktail;

  get ingredients() {
    return this.cocktailForm?.get('ingredients') as FormArray
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index')!;
      if(index != null){
        this.cocktail = this.cocktailService.getCocktail(+index);
        this.cocktailForm = this.initForm(this.cocktail);
      }
    });
  }

  private initForm(cocktail: Cocktail = { name:"", description:"", img:"", ingredients:[]}): FormGroup {
    return this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
         this.fb.group({
          name: [ingredient.name, Validators.required],
          quantity: [ingredient.quantity, Validators.required]
          })
        ),
      Validators.required)
    });
  }

  public addIngredient() : void {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: [0, Validators.required]
    }))
  }

  public submit(): void {
    if(this.cocktail){
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
    //le second param est un objet de config pour dire que l'on navige de façon relative a la route active
    this.router.navigate(['..'], { relativeTo: this.ActivatedRoute })
  }

}
