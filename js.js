'use strict';

let obj = {
    active: '10',
    strings: '123',
    status: {
       on: 10,
        off: 11
    },
    moments: [true, false, 'cool']
};
console.log(obj);


// let obj2 = obj;
// obj2.active = '11';

let obj2 = {
    ...obj
};
obj2.active = '10';
obj2.moments = [1, 1, 1];

console.log(obj);
console.log(obj2);

