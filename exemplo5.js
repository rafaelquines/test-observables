"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/fromEventPattern");
require("rxjs/add/observable/fromPromise");
class MyCounter {
    constructor(limit) {
        this.limit = limit;
        this.counter = 0;
        this.interval = -1;
        this.oddObserve = Observable_1.Observable.create((observer) => {
            console.log('construiu odd');
            this.oddEmitter = observer;
        });
        this.evenObserve = Observable_1.Observable.create((observer) => {
            console.log('construiu even');
            this.evenEmitter = observer;
        });
        this.primeObserve = Observable_1.Observable.create((observer) => {
            console.log('construiu orime');
            this.primeEmitter = observer;
        });
    }
    start() {
        this.interval = setInterval(() => {
            this.counter++;
            // console.log("COUNTER: ", this.counter);
            if (this.counter % 2 == 0) {
                this.evenEmitter.next(this.counter);
            }
            if (this.counter % 2 != 0) {
                this.oddEmitter.next(this.counter);
            }
            if (this.isPrime(this.counter)) {
                this.primeEmitter.next(this.counter);
            }
            if (this.counter >= this.limit) {
                this.oddEmitter.complete();
                this.evenEmitter.complete();
                this.primeEmitter.complete();
                clearInterval(this.interval);
            }
        }, 1000);
    }
    onOdd() {
        return this.oddObserve;
    }
    onEven() {
        return this.evenObserve;
    }
    onPrime() {
        return this.primeObserve;
    }
    isPrime(n) {
        if (n < 2)
            return false;
        var q = Math.floor(Math.sqrt(n));
        for (var i = 2; i <= q; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
var myCounter = new MyCounter(20);
myCounter.onEven().subscribe((v) => console.log("Par: " + v), (err) => console.log('Erro: ', err), () => console.log('Terminou par'));
myCounter.onOdd().subscribe((v) => console.log("Ímpar: " + v), (err) => console.log('Erro: ', err), () => console.log('Terminou ímpar'));
myCounter.onPrime().subscribe((v) => console.log("Primo: " + v), (err) => console.log('Erro: ', err), () => console.log('Terminou primo'));
myCounter.start();
// counter.onPrime().subscribe(
//     (v) => console.log("Primo: " + v),
//     (err) => console.log('Erro: ', err),
//     () => console.log('Terminou primo')
// );
