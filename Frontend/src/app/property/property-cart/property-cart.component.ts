import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.scss']
})
export class PropertyCartComponent implements OnInit {

  constructor() {
   }
   public TheHouse: any = {
    "Id": 1,
    "Name": "My House",
    "Type": "The House",
    "Price": 50000
   }

  ngOnInit(): void {
  }

}
