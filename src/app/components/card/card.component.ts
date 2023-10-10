import { Component, Input } from '@angular/core';
import { fruitNotImage } from 'src/app/enum/enum.utils';
import { Fruit } from 'src/app/models/fruit';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  item!: Fruit;

  // item: Fruit = {
  //   id: 0,
  //   french_name: '',
  //   roman_name: '',
  //   type: '',
  //   description: '',
  //   filename: ''
  // };

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    // this.fruitService.getFruit(this.id).subscribe(data => {
    //   this.item = data;
    //   console.log(data);
    // });

    if(this.item.filename) {
      this.fruitService.getImageFruit(this.item.filename).subscribe(data => {
        this.item.fileURL = data.image;
      });
    } else {
      this.item.fileURL = fruitNotImage;
    }

    if(!this.item.roman_name) {
      this.item.roman_name = this.item.french_name.split(" ").pop();
      this.item.roman_name = this.item.roman_name?.split("'").pop();
    }
  }

}
