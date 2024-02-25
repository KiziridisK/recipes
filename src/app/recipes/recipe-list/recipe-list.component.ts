import { Component, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]  = [
    new Recipe('A test recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A test recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
    
  ];

  onRecipeSelected(recipe: Recipe){
    console.log('onRecipeSelecte was called');
    this.recipeWasSelected.emit(recipe);
  }
}
