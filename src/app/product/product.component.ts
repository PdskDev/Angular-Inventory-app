import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "in-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  @Input() product: any;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      basic: fb.group({
        name: "",
        description: "",
        active: false,
        features: fb.array([fb.control("")]),
      }),
      expiration: fb.group({
        expirationDate: null,
      }),
    });
  }

  deviceType = "tablet";

  deviceTypes = [
    {
      name: "Tablet",
      icon: "tablet",
    },
    {
      name: "Laptop",
      icon: "computer",
    },
    {
      name: "Phone",
      icon: "mobile",
    },
    {
      name: "Monitor",
      icon: "display",
    },
  ];

  selectedDevice(device: any) {
    this.deviceType = device.icon;
  }
  ngOnInit() {}
}
