import { Observable, fromEvent, Subject, ReplaySubject, AsyncSubject, merge, from, interval } from "rxjs";

// SkipUntil
import { skipUntil } from 'rxjs/operators';
var obs1 = Observable.create((data:any) => {
  var i = 1;
  setInterval(() => {
    data.next(i++)
  },1000)
})

var obs2 = new Subject;

setTimeout(() => {
  obs2.next('Hey!')
}, 5000);

var newObs = obs1.pipe(skipUntil(obs2));

newObs.subscribe((x:any) => addItem(x));


// Pluck
// import { pluck } from 'rxjs/operators';
// from([
//   {first: 'Gary', Last: 'Simon', age: 34},
//   {first: 'Jane', Last: 'Simon', age: 34},
//   {first: 'John', Last: 'Simon', age: 34}
// ]).pipe(pluck('first')).subscribe((x:any) => addItem(x));



// Map
//import { map } from 'rxjs/operators';
// Observable.create((observer:any) => {
//   observer.next('Hey Guys!')
// }).pipe(map((val:string) => val.toUpperCase())).subscribe((x:any) => addItem(x));

// Merge
// var observable = Observable.create((observer:any) => {
//   observer.next('Hey Guys!')
// })

// var observable2 = Observable.create((observer:any) => {
//   observer.next('Hows it going?')
// })


// var newObs = merge(observable, observable2);

// newObs.subscribe(
//   (x:any) => addItem(x)
// );

// Async Subject
// var subject = new AsyncSubject();

// subject.subscribe(
//   data => addItem('Observer 1: '+ data),
//   () => addItem('Observer 1 Completed')
// )

// var i = 1;
// var int = setInterval(()=>{
//   subject.next(i++)
// }, 100);

// setTimeout(() =>{
//   var observer2 = subject.subscribe(
//     data => addItem('Observer 2: '+ data)
//   );
//   subject.complete();
// }, 500);


// Replay Subject
// var subject = new ReplaySubject(30, 500);

// subject.subscribe(
//   data => addItem('Observer 1: '+ data),
//   error => addItem(error),
//   () => addItem('Observer 1 Completed')
// )
// var i = 1;
// var int = setInterval(()=>{
//   subject.next(i++)
// }, 100);

// setTimeout(() =>{
//   var observer2 = subject.subscribe(
//     data => addItem('Observer 2: '+ data)
//   );
// }, 500);

// FROMEVENT
// var observable = fromEvent(document, 'mousemove');

// setTimeout(() => {
//   var sub = observable.subscribe(
//     (x:any) => addItem(x)
//   )
// }, 2000);

// OBSERVERABLE

// import 'rxjs/add/operator/share';
// var observable = Observable.create((observer: any) => {
// 	try {
// 		observer.next("Hey Guys!");
// 		observer.next("How are you?");
// 		setInterval(() => {
// 			observer.next("I am Groot");
// 		}, 2000);
// 	} catch (err) {
// 		observer.error(err);
// 	}
// }).share();

// var observer = observable.subscribe(
// 	(x: any) => addItem(x),
// 	(error: any) => addItem(error),
// 	() => addItem("Completed")
// );


// setTimeout(() => {
// 	var observer2 = observable.subscribe(
//     (x:any) => addItem('subscriber 2: '+ x)
//   )
// }, 1000);

function addItem(val: any) {
	var node = document.createElement("li");
	var textnode = document.createTextNode(val);
	node.appendChild(textnode);
	document.getElementById("output").appendChild(node);
}
