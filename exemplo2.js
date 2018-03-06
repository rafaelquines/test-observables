"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/range");
var source = Observable_1.Observable.range(1, 5);
var subscription = source.subscribe(next => console.log('onNext: %s', next), error => console.log('onError: %s', error), () => console.log('onCompleted'));
