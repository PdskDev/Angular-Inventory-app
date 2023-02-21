import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ProductService } from "../service/product.service";
import { IProduct } from "../model/iproduct";
import { Observable } from "rxjs";

@Component({
  selector: "in-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]> = this.productService.products$;

  constructor(private productService: ProductService) {}

  trackById(index, item) {
    return item.id;
  }

  ngOnInit() {}
}
