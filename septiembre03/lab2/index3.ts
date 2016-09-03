'use strict';
/**
 *  
 */
class User  {
    firstname: string;
    lastname: string;
    phone: string;
    password:string;

    constructor(firstname: string, lastname: string, phone: string, password:string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;        
    }
}

/**
 * Product  */
class Product {
    name: string;
    type: string;
    price: number;
    quantity: number;
    constructor(name: string, type: string, price: number, quantity: number) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }
}