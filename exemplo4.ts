import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

var array = [1,2,3,4,5];
var source = Observable.from(array);

var subscription = source.subscribe(
  x => console.log('onNext: %s', x),
  e => console.log('onError: %s', e),
  () => console.log('onCompleted'));