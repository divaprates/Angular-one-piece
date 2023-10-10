import { Component } from '@angular/core';
import { Fruit } from 'src/app/models/fruit';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fruits: Fruit[] = [];

  limitItems: number = 10;

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.loadingFruits();
  }

  loadingFruits() {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
    });
  }

  onScrollUp(event: any) {
    // this.limitItems = this.limitItems <= 10 ? 10 : this.limitItems - 10;
  }

  onScrollDown(event?: any) {
    this.limitItems += 10;
  }

}
