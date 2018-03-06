import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/timestamp';

var source = Observable.timer(
    5000, /* 5 seconds */
    1000 /* 1 second */)
    .timestamp();
  
  var subscription = source.subscribe(
    x => console.log(x));