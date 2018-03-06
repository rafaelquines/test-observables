import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromEventPattern';
import 'rxjs/add/observable/fromPromise';

class MyCounter {
    oddObserve: Observable<any>;
    evenObserve: Observable<any>;
    primeObserve: Observable<any>;
    oddEmitter: any;
    evenEmitter: any;
    primeEmitter: any;
    counter: number = 0;
    interval: number = -1;
    constructor(private limit: number) {
        this.oddObserve = Observable.create((observer: any) => {
            console.log('construiu odd');
            this.oddEmitter = observer;
        });
        this.evenObserve = Observable.create((observer: any) => {
            console.log('construiu even');
            this.evenEmitter = observer;
        });
        this.primeObserve = Observable.create((observer: any) => {
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

    isPrime(n: number) {
        if (n < 2) return false;
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

myCounter.onEven().subscribe(
    (v) => console.log("Par: " + v),
    (err) => console.log('Erro: ', err),
    () => console.log('Terminou par')
);

myCounter.onOdd().subscribe(
    (v) => console.log("Ímpar: " + v),
    (err) => console.log('Erro: ', err),
    () => console.log('Terminou ímpar')
);

myCounter.onPrime().subscribe(
    (v) => console.log("Primo: " + v),
    (err) => console.log('Erro: ', err),
    () => console.log('Terminou primo')
);

myCounter.start();





// counter.onPrime().subscribe(
//     (v) => console.log("Primo: " + v),
//     (err) => console.log('Erro: ', err),
//     () => console.log('Terminou primo')
// );