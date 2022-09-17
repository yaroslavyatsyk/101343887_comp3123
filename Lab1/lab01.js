'use strict';

function capitalize(string) {
    var strings = string.split(' ');

    var result = "";

    for(var i = 0; i < strings.length; i++) {
        let j = 0;
        
        while(j < strings[i].length) {
            if(j == 0) {
                result += strings[i][j].toUpperCase();
            }
            else {
                result += strings[i][j].toLowerCase();
            }
            j++;
        }
        result += ' ';
    }
    return result.trim();
}
console.log("Calling capitalize() function");
console.log(capitalize("the quick brown fox"));

function max(a, b, c) {
    if(a > b && b > c) {
        return a;
    }
    else if(b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}
console.log("Calling max() function");
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

function right(str) {
    if(str.length <= 3) {
        return str;
    }
    else {
        return str.substring(str.length - 3) + str.substring(0, str.length - 3);
    }
}
console.log("Calling right() function");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

function angle_Type(angle) {
    if(angle >= 0 && angle < 90) {
        return "Acute angle";
    }
    else if(angle > 90 && angle < 180) {
        return "Obtuse angle";
    }
    else if(angle === 90) {
        return "Right angle";
    }
    else {
        return "Straight angle";
    }

    
}
console.log("Calling angle_Type() function");
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

function array_max_sum(list, k) {
  
    let currSum = 0;
    let sum = 0;
    let max = 0;

    for(var i = 0; i < k; i++) {
        sum += list[i];
    }

    currSum = sum;
   
    for(let i = k; i < list.length; i++) {
        currSum += list[i] - list[i - k];

        max = Math.max(currSum,sum);

       
    }
    return max;
}
console.log("Calling array_max_sum() function");
console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))