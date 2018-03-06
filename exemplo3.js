"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/timestamp");
var source = Observable_1.Observable.timer(5000, /* 5 seconds */ 1000 /* 1 second */)
    .timestamp();
var subscription = source.subscribe(x => console.log(x));
