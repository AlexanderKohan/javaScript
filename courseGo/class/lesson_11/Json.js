/**
 * Created by Alexander on 8/26/2016.
 */

var obj = {
    rate: 'Hello',
    age: 10,
    drink: true,
    classes: ['1', '2', '3', ['abc']]
};

var jString = JSON.stringify(obj);

console.log(jString);
