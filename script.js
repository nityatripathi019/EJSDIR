
// console.log("hello jee aapka swagat h backend development me");
// for(let i=0;i<5;i++){
//     console.log("hello" +" " + i);
// }
// console.log("hello my name is diya");

// console.log(process.argv);

// let args = process.argv;
// for(let i =2;i<args.length;i++){
//    console.log(`${args[i]} hello jee`);
// }

// const value = require("./math");
// console.log(value);
// const math = require("./math");
// // console.log(math);
// console.log(math.sum(3,4));
// console.log(math.sub(7,8));
// console.log(math.mul(3,4));
// console.log(math.g);

// const info = require("./fruits");
// // console.log(info);
// console.log(info[0]);
// console.log(info[0].name);
// console.log(info[0].color);

//import module

//require vs import
//import is latest in use it is introduced in es6 and require is old
//we can't selectively load the pieces we need with require but with import , we can selectively load only the pieces we need , which can save memory
//loading can be synchronus for "require "but can be asynchronus fr import

import {sum,PI,mul} from "./math.js";
import generateRandomUsername from 'generate-random-username';


// console.log(sum(3,7));
// console.log(PI);

console.log(generateRandomUsername());