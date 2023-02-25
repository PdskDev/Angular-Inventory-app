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
  productOpen;
  selectedProduct: IProduct;

  products$: Observable<IProduct[]> = this.productService.products$;

  constructor(private productService: ProductService) {}

  trackById(index, item) {
    return item.id;
  }

  ngOnInit() {}

  delete = false;
  productToBeDeleted;

  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel() {
    this.delete = false;
  }

  confirmDelete() {
    this.handleCancel();
    this.productService.removeProduct(this.productToBeDeleted);
  }

  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product) {
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleFinish(event) {
    if (event && event.product) {
      if (this.selectedProduct) {
        this.productService.editProduct(this.selectedProduct.id, event.product);
      } else {
        this.productService.addProduct(event.product);
      }
    }
    this.productOpen = false;
  }
}
