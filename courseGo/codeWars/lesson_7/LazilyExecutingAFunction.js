/**
 * Created by Alexander on 8/17/2016.
 */
/*
 http://www.codewars.com/kata/lazily-executing-a-function/train/javascript

 Deferring a function execution can sometimes save a lot of execution time in our programs by postponing the execution to the latest
 possible instant of time, when we're sure that the time spent while executing it is worth it.
 Write a method make_lazy that takes in a function (symbol for Ruby) and the arguments to the
 function and returns another function (lambda for Ruby) which when invoked, returns the result of the original function
 invoked with the supplied arguments.
 For example:
 Given a function add
 function add (a, b) {
 return a + b;
 }
 One could make it lazy as:
 var lazy_value = make_lazy(add, 2, 3);
 The expression does not get evaluated at the moment, but only when you invoke lazy_value as:
 lazy_value() => 5
 The above invokation then performs the sum.
 Please note: The functions that are passed to make_lazy may take one or more arguments and the number of arguments is not fixed.
 var make_lazy = function () {
 // TODO: implement this function
 };

 */
var double = function (n) {
    return n * 2;
};

function add(a, b) {
    return a + b;
}

var make_lazy = function () {

    var operation = arguments[0];
    var args = [].splice.call(arguments, 1);

    return function () {

        return operation.apply(arguments, args);
    }
};

var lazy_value = make_lazy(add, 2, 3);

console.log(lazy_value()) // => 5

var lazy_value = make_lazy(double, 5);

console.log(lazy_value()) // => 10


