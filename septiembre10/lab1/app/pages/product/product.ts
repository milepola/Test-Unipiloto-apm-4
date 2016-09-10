/*import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {
  
public list: any;
  constructor(private navCtrl: NavController) {
this.list =[
  {
    name: 'product1',
    type: 'element',
    price: 5000,
    quantity:10
  },
   {
    name: 'product2',
    type: 'element',
    price: 6000,
    quantity:10
  },
   {
    name: 'product3',
    type: 'element',
    price: 7000,
    quantity:10
  },
   {
    name: 'product4',
    type: 'element',
    price: 8000,
    quantity:10
  }
]
  }

}*/


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductServices } from '../../providers/product/product';

@Component({
  templateUrl: 'build/pages/product/product.html'
})
export class ProductPage {

	public list;

  constructor(private navCtrl: NavController, private productServices: ProductServices){
  }

  getProduct(){
  	this.productServices.getProducts().subscribe(
	  		list => { this.list = list},
	  		err => {
	  			alert(err);
	 });
  }

}
