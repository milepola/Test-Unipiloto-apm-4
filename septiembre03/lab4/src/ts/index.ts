import { Component } from 'angular2/core';

@Component({
    selector: 'tag-product',
    templateUrl: 'src/templates/home.html'
})

export class Product {
    Name = 'producto 1';
    Type = 'tipo a';
    Price = '1000';
    Quantity = '5';
}