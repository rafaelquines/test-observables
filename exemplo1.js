"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
// var arr = ['a', 'b', 'c'];
let data;
data = new Observable_1.Observable(observer => {
    setTimeout(() => {
        observer.next(42);
    }, 1000);
    setTimeout(() => {
        observer.next(43);
    }, 1000);
    // setTimeout(() => {
    //     observer.error("Erro simulado");
    // }, 2000)
    setTimeout(() => {
        observer.complete();
    }, 3000);
    console.log('Observable iniciado');
});
let subscription = data.subscribe(value => {
    console.log('Recebi: ' + value);
}, error => {
    console.log('ERROR: ', error);
}, () => {
    console.log('FIM');
});
