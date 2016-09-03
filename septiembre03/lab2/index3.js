'use strict';
/**
 *
 */
var User = (function () {
    function User(firstname, lastname, phone, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
    }
    return User;
}());
/**
 * Product  */
var Product = (function () {
    function Product(name, type, price, quantity) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }
    return Product;
}());
