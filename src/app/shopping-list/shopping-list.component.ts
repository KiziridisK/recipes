import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingridients: Ingridient[] = [
    new Ingridient('apples',5),
    new Ingridient('tomato',10)
  ];

  constructor() {}

  ngOnInit(){

  }

  onIngridientAdded(ingridient: Ingridient){
    this.ingridients.push(ingridient);
  }
}
