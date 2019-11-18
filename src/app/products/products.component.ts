import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../Interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Iproduct[] = [
    {
      id: 1,
      name: "core i3",
      price: 300,
      sale: 250,
      photo: "assets/images/300838.jpg"
    },
    {
      id: 2,
      name: "core i5",
      price: 500,
      sale: 450,
      photo: "assets/images/300838.jpg"
    },
    {
      id: 3,
      name: "core i7",
      price: 700,
      sale: null,
      photo: "assets/images/300838.jpg"
    },
    {
      id: 2,
      name: "core i5",
      price: 500,
      sale: 450,
      photo: "assets/images/300838.jpg"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
