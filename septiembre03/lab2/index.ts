'use strict';

var my_array: Array<number> = [1,2,3,4,5];

var other_array: Array<any> = ["array", 3, 5, 6, [1,2,3,4]];

var tasks: Array<number> = [1,3,4,5];

function greeter(person: Array<string>){
    return person;
}

var user: Array<string> = ["1","32"];

console.log(greeter(user));

var words: string = "algo";

console.log(words);

var num1: number = 1;
var num2: number = 2;

function Summary(var1: number, var2: number){
    return var1 + var2;
}

console.log(Summary(num1 ,num2));
