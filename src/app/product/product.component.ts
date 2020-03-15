import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product : Product = {
    name: "Sản phẩm 1",
    price: 26.99,
    desc: "Thông tin mô tả sản phẩm",
    img: "http://placehold.it/700x400",
    status: true
  }
  changeStatus(){
    this.product.status = false; 
  }
}