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
      name: "PlayStation 4 500Gb",
      active: true,
      description: "Like Brand New",
      expirationDate: "30/06/2023",
      type: "game-console",
    },
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
      name: "Samsung Galaxy J 2",
      active: false,
      description: "Like Brand New",
      expirationDate: "03/5/2022",
      type: "mobile",
    },
    {
      id: generateId(),
      name: "Sony Bravia Xtra",
      active: true,
      description: "Best image",
      expirationDate: "10/8/2023",
      type: "television",
    },
    {
      id: generateId(),
      name: "Nintendo Switch 64",
      active: true,
      description: "Like Brand New",
      expirationDate: "16/10/2023",
      type: "game-console",
    },
    {
      id: generateId(),
      name: "PlayStation 5 1Tb",
      active: true,
      description: "Like Brand New",
      expirationDate: "10/06/2023",
      type: "game-console",
    },
    {
      id: generateId(),
      name: "IPhone 6",
      active: false,
      description: "Like Brand New",
      expirationDate: "09/12/2022",
      type: "mobile",
    },
    {
      id: generateId(),
      name: "Samsung Galaxy X",
      active: false,
      description: "Like Brand New",
      expirationDate: "05/5/2022",
      type: "mobile",
    },
    {
      id: generateId(),
      name: "Sony Bravia 55",
      active: true,
      description: "Best image",
      expirationDate: "10/8/2023",
      type: "television",
    },
    {
      id: generateId(),
      name: "Nintendo Switch I",
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

  removeProduct(product: IProduct) {
    const index = this.products.indexOf(product);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ];

    this.products$.next(this.products);
  }

  addProduct(product: IProduct) {
    this.products = [
      {
        id: generateId(),
        ...product,
      },
      ...this.products,
    ];
    this.products$.next(this.products);
  }

  editProduct(id: number, product: IProduct) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products = [
      ...this.products.slice(0, index),
      {
        id,
        ...product,
      },
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
}
