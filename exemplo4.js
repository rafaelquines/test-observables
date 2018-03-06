"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
var array = [1, 2, 3, 4, 5];
var source = Observable_1.Observable.from(array);
var subscription = source.subscribe(x => console.log('onNext: %s', x), e => console.log('onError: %s', e), () => console.log('onCompleted'));
