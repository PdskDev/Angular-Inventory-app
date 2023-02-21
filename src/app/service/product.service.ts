import { Injectable } from "@angular/core";
import { IProduct } from "../model/iproduct";
import { BehaviorSubject } from "rxjs";

function generateId() {
  return Math.floor(Math.random() * 10000);
}

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: IProduct[] = [
    {
      id: generateId(),
      name: "IPhone X",
      active: false,
      description: "Like Brand New",
      expirationDate: "01/12/2022",
      type: "mobile",
    },
    {
      id: generateId(),
      name: "Samsung Galaxy J",
      active: false,
      description: "Like Brand New",
      expirationDate: "01/5/2022",
      type: "mobile",
    },
    {
      id: generateId(),
      name: "Sony Bravia 65",
      active: true,
      description: "Best image",
      expirationDate: "09/8/2023",
      type: "television",
    },
    {
      id: generateId(),
      name: "Nintendo Switch",
      active: true,
      description: "Like Brand New",
      expirationDate: "15/10/2023",
      type: "game-console",
    },
    {
      id: generateId(),
      name: "PlayStation 4",
      active: true,
      description: "Like Brand New",
      expirationDate: "30/06/2023",
      type: "game-console",
    },
  ];

  products$ = new BehaviorSubject<IProduct[]>(this.products);
}
