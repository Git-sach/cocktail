import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];
  @Input() public selectedCocktail!: Cocktail;
  @Output() public eventViewCocktail: EventEmitter<number> = new EventEmitter();

  constructor() {};

  ngOnInit(): void {};

  public viewCocktail(index: number): void {
    this.eventViewCocktail.emit(index);
  }
}
