import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

var source = Observable.range(1, 5);

var subscription = source.subscribe(
    next => console.log('onNext: %s', next),
    error => console.log('onError: %s', error),
    () => console.log('onCompleted')
);

