function past(h, m, s) {
    let hoursInMs = h * 3600 * 1000;
    let minInMs = m * 60 * 1000;
    let secInMs = s * 1000;
    let result = hoursInMs + minInMs + secInMs;
    return result;


}

// console.log(past(0, 1, 1));
function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}

// console.log(greet('Vasya', 'Vasya'));
// console.log(greet('Vasya', 'Dima'));


function updateLight(current) {
    const obj = {"green": "yellow", "yellow": "red", "red": "green"};
    return obj[current]


}

// console.log(updateLight("green"));
// console.log(updateLight("yellow"));
// console.log(updateLight("red"));


const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w;
    } else {
        return l * 2 + w * 2;
    }
};
// console.log(areaOrPerimeter(3, 3));
// console.log(areaOrPerimeter(6, 10));


function sumArray(array) {


    if (array === null || !array) {
        return 0;
    }
    if (array.length === 0 || array.length === 1 || array.length === 2) {
        return 0;
    }

    let max = Math.max.apply(null, array);
    let min = Math.min.apply(null, array);
    array.splice(array.indexOf(max), 1)
    array.splice(array.indexOf(min), 1)
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }


    return sum;
}

// console.log(sumArray(null));
// console.log(sumArray([]));
// console.log(sumArray([3]));
// console.log(sumArray([3, 5]));
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([0, 1, 6, 10, 10]));
// console.log(sumArray([-6, -20, -1, -10, -12]));
// console.log(sumArray([-6, 20, -1, 10, -12]));
// console.log(sumArray(undefined))


function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}

// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(3));


function reverseWords(str) {
    let a = str.split(" ")
    let b = [];
    for (let aElement of a) {
        b.push(aElement.split("").reverse().join(""))
    }


    return b.join(" ")
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.') === 'ehT kciuq nworb xof spmuj revo eht yzal .god');


function maps(x) {
    return x.map((el) => el * 2);
}

// console.log(maps([1,2,3]));


function descendingOrder(n) {
    return Number(String(n).split("").sort((a, b) => b - a).join(""));


}

// console.log(descendingOrder(123));


function abbrevName(name) {
    return name.split(" ").map((a) => a[0].toUpperCase()).join(".")

}

// console.log(abbrevName('Nikita Dmitr'));


function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count = count + 1;
        }
    }
    return count
}

// console.log(strCount("Hello", "l"));

//Подсчитайте, сколько лет назад отец был вдвое старше сына
// (или через сколько лет он будет вдвое старше).
// Ответ всегда больше или равен 0, независимо от того, был он в прошлом или в будущем.
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let count = 0;
    if (dadYearsOld / sonYearsOld > 2) {
        while (true) {
            if (dadYearsOld / sonYearsOld === 2) {

                break
            }
            count = count + 1
            dadYearsOld++
            sonYearsOld++
            console.log(count)
        }
    } else if (dadYearsOld / sonYearsOld < 2) {
        while (true) {
            if (dadYearsOld / sonYearsOld === 2) {

                break
            }
            count = count + 1
            dadYearsOld--
            sonYearsOld--

        }


    } else {
        return 0
    }
    return count;


}

// console.log(twiceAsOld(55,30));


var number = function (array) {
    return array.map((arr, index) => `${index + 1}: ${arr}`)
}

//


function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2
    }

    if (operation === '-') {
        return value1 - value2
    }

    if (operation === '*') {
        return value1 * value2
    }

    if (operation === '/') {
        return value1 / value2
    }
}

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));


function solution(str, ending) {
// if (str===String&&ending===String&&str.indexOf(str)===ending.indexOf(str)){
// return true
// }else {
//     return false
// }
//     for (var i = 0; i < str.length; i++) {
//         for (var j = 0; j < ending.length; j++) {
//             if (str[i] === ending[j]&&) {
//                 return true
//             }else{
//            return  false
//             }
//         }
//         }

    return str.endsWith(ending)

}


// console.log(solution('abc','bc'));
// console.log(solution('abc','d'));


function century(year) {
    return Math.ceil(year / 100);

}

// console.log(century(1705));


function evenOrOdd(number) {
    if (number % 2) {
        return "Odd"
    } else {
        return "Even"
    }
}

// console.log(evenOrOdd(12));
// console.log(evenOrOdd(9));


function move(position, roll) {
    return roll * 2 + position;
}

// console.log(move(0, 4));


function fakeBin(x) {
    const digits = x.split('').map(digit => digit < 5 ? 0 : 1);
    return digits.join('');

}

// console.log(fakeBin('45385593107843568'));


function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


// console.log(disemvowel("This website is for losers LOL!"));//"Ths wbst s fr lsrs LL!"


function stringToArray(string) {
    let a = string.split(" ")
    return a

}

// console.log(stringToArray("I love arrays they are my favorite"));


function grow(x) {
    return x.reduce((a, b) => a * b, 1)
}


// console.log(grow([1, 2, 3]));


function enough(cap, on, wait) {
    if (cap - on >= wait) {
        return 0;
    } else {
        return wait - (cap - on);
    }
}

// console.log(enough(10, 5, 5));//0
// console.log(enough(100, 60, 50));//10


function smash(words) {
    return words.join(" ")
}


//console.log(smash(['hello', 'world', 'this', 'is', 'great']));


var isSquare = function (n) {
    const squareRoot = Math.sqrt(n);
    return Number.isInteger(squareRoot);
}

// console.log(isSquare(-1));
// console.log(isSquare(25));


function testEven(n) {
    if (n === 0) {
        return true;
    }
    if (n % 2) {
        return false
    } else {
        return true
    }
}

// console.log(testEven(1));
// console.log(testEven(2));
// console.log(testEven(-4));
// console.log(testEven(0.5));
// console.log(testEven(0));


function getGrade(s1, s2, s3) {
    let a = (s1 + s2 + s3) / 3
    if (a >= 90 && a <= 100) {
        return "A";
    }
    if (a >= 80 && a < 90) {
        return "B";
    }

    if (a >= 70 && a < 80) {
        return "C";
    }

    if (a >= 60 && a < 70) {
        return "D";
    }

    if (a >= 0 && a < 60) {
        return "F";
    }
}

// console.log(getGrade(95, 90, 93));
// console.log(getGrade(70, 70, 100));
// console.log(getGrade(70, 70, 70));
// console.log(getGrade(65, 70, 59));
// console.log(getGrade(58, 59, 60));


function noSpace(x) {
    return x.replace(/\s+/g, '');
}

//console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    }

    if (names.length === 1) {
        return names + " " + "likes this";
    }

    if (names.length === 2) {
        let a = names.join(" and ")
        // let b=a.replace(/,(?=[^,]*$)/, "and ")
        return a + " " + "like this"
    }

    if (names.length === 3) {

        return names[0] + "," + " " + names[1] + " " + "and" + " " + names[2] + " " + "like this"
    }

    if (names.length === 4) {

        return names[0] + "," + " " + names[1] + " " + "and" + " " + "2 others like this"
    }

    if (names.length > 4) {
        let gg = names[0] + "," + " " + names[1] + " " + "and" //+ " "+(names)+" "+"others like this"
        names.splice(0, 2)
        return gg + " " + (names.length) + " " + "others like this"
    }
}

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Lox"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Lox","Chmo"]));


var countSheep = function (num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

// console.log(countSheep(0));
// console.log(countSheep(1));
// console.log(countSheep(2));
// console.log(countSheep(3));


function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    if (n >= 0 || m >= 0) {
        return n * m
    }
}


// console.log(paperwork(5, 5));//25
// console.log(paperwork(5, -5));//0
// console.log(paperwork(-5, -5));//0
// console.log(paperwork(-5, 5));//0
// console.log(paperwork(5, 0));//0


function booleanToString(b) {
    if (b === true) {
        return "true"
    } else {
        return "false"
    }
}

// console.log(booleanToString(true));
// console.log(booleanToString(false));


function solution(string) {
    let massivRazdelit = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            massivRazdelit.push(i)
        }
    }
    let splitStr = string.split("")
    let count = 0
    for (const massivRazdelitElement of massivRazdelit) {
        splitStr.splice(massivRazdelitElement + count, 0, ",")
        count = count + 1

    }
    return splitStr.join("").replaceAll(",", " ")

}


// console.log(solution("camelCasing"));
// console.log(solution("camelCasingGg"));
// console.log(solution("camelCasingGgHh"));


function getCount(str) {
    let glasnBukv = ["a", "e", "i", "o", "u"]
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (glasnBukv.includes(str[i])) {
            count = count + 1
        }
    }
    return count
}


// console.log(getCount("abracadabraoi"));


function validatePIN(pin) {
    // console.log(pin.length)
    // if (pin.length!==4||pin.length!==6){
    //     return false
    // }
    if (pin.length === 4 || pin.length === 6) {
        let count = 0
        for (let i = 0; i < pin.length; i++) {
            if (parseInt(pin[i]) || pin[i] === "0") {
                count = count + 1
            } else {

                return false
            }
        }
        // console.log(count,pin)
        return true

    }
    return false
}

// console.log(validatePIN("1234"));
// console.log(validatePIN("12345"));
// console.log(validatePIN("a345"));
// console.log(validatePIN("-345"));
// console.log(validatePIN("-32.45"));
// console.log(validatePIN("-32.4512"));
// console.log(validatePIN("234567890"));
// console.log(validatePIN("1"));
// console.log(validatePIN("0000"));


function countSmileys(arr) {
    if (arr.length === 0) {
        return 0
    }
    let arraySmile = [':)', ':D', ';-D', ':~)', ';~D', ':-D', ':-)', ';D', ';~)', ':~D', ';)', ';-)']
    let count = 0
    arr.forEach((e) => {
        if (arraySmile.includes(e)) {
            count = count + 1
        }
    })
    return count
}


// console.log(countSmileys([':D', ':~)', ';~D', ':)']));
// console.log(countSmileys([':)',':(',':D',':O',':;']));
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
// console.log(countSmileys([]));


function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }
    let n = 0
    let s = 0
    let w = 0
    let e = 0
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === "n") {
            n++
        }
        if (walk[i] === "s") {
            s++
        }
        if (walk[i] === "w") {
            w++
        }
        if (walk[i] === "e") {
            e++
        }
    }
    if (n === s && w === e) {
        return true
    } else {
        return false
    }
}


// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['n','e','n','e','s','s','s','w','w','n']));


function bouncingBall(h, bounce, window) {
    if (h * bounce === 1) {
        return 1
    } else if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        let count = 0
        while (h >= window) {//пока
            h = h * bounce
            count = count + 1
            console.log(h)

        }
        return count * 2 - 1
    } else {
        return -1
    }

}

//console.log(bouncingBall(3.0, 0.66, 1.5));
//console.log(bouncingBall(30.0, 0.66, 1.5));
//console.log(bouncingBall(0, 2, 10));
//console.log(bouncingBall(4, 0.25, 1));


// function arrayDiff(a, b) {
//     if (b.length === 0) {
//         return a
//     }
//     let newarr = [...a]
//     for (let i = 0; i < b.length; i++) {
//         newarr = [...newarr.filter((elem) => elem !== b[i])]
//     }
//     return newarr
//
// }

// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
// console.log(arrayDiff([1, 2, 2, 2, 3], [1, 3]));
// console.log(arrayDiff([1, 2, 2, 2, 3], []));


var countBits = function (n) {
    let a = n.toString(2)
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 1) {
            count = count + 1
        }
    }
    return count


};


// console.log(countBits(4));
// console.log(countBits(15));
// console.log(countBits(321));


function rgb(r, g, b) {
    let a = "FF"
    if (r <= 0) {
        a = "00"
    } else if (r < 255 && r > 0) {
        a = r.toString(16).toUpperCase()
        if (r < 16) {
            a = "0" + a

        }
    }
    let c = "FF"
    if (g <= 0) {
        c = "00"
    } else if (g < 255 && g > 0) {
        c = g.toString(16).toUpperCase()
        if (g < 16) {
            c = "0" + c

        }
    }
    let d = "FF"
    if (b <= 0) {
        d = "00"

    } else if (b < 255 && b > 0) {
        d = b.toString(16).toUpperCase()
        if (b < 16) {
            d = "0" + d

        }
    }

    return a + c + d


}

// console.log(rgb(255, 255, 255));
// console.log(rgb(0, 0, 0));
// console.log(rgb(0, 0, -20));
// console.log(rgb(121, 6, 113));


// function mysteryRange(s,n){
//   let arr=[]
//     for (let i = 0; i < s.length; i++) {
//         if (s[i]==="1"||s[i]==="2"){
//            console.log([s[i],s[i+1]].join(''),"1")
//             arr.push([s[i],s[i+1]].join(''))
//         }else if(s[i+1]==="0"){
//             arr.push([s[i],s[i+1]].join(''))
//             console.log([s[i],s[i+1]].join(''),"2")
//         }else if(arr.at(-1).split('')[1]!==s[i]){
//             // console.log(s[i],"3")
//             // arr.push(s[i])
//         }else{
//             console.log("errrrrrrr")
//         }
//
//     }
//     let result=arr.map((elem)=>Number(elem)).sort((a,b)=>a-b)
//     return [result[0],result.at(-1)]
// }
//
// console.log(mysteryRange('6291211413114538107', 14));//[1,14]
//console.log(mysteryRange('13161820142119101112917232215',15));//[9,23] // 13 16 18 20 14 21 19 10 11 12 9 17 23 22 15
// console.log(mysteryRange('2318134142120517221910151678611129',20));//[4,23]
//console.log(mysteryRange('1568141291110137',10));//[6,15]    // 15 6 8 14 12 9 11 10 13 7


// function queueTime(customers, n) {
//
//     let kassi=[]
//     for (let i = 0; i < n; i++) {
//         kassi.push(0)
//     }
//     // console.log(kassi)
//     for (let i = 0; i <customers.length ; i++) {
//         if (i<n){
//             kassi[i]=customers[i]
//             continue
//         }
//         let min=Math.min(...kassi)
//         let indexMin=kassi.indexOf(min)
//         kassi[indexMin]=kassi[indexMin]+customers[i]
//         // console.log(min,indexMin)
//     }
//     // console.log(kassi)
//     return Math.max(...kassi)
//
// }
// console.log(queueTime([], 2));//0
// console.log(queueTime([5, 3, 4], 1));//12
// console.log(queueTime([10,2,3,3], 2));//10
// console.log(queueTime([2,3,10,2], 2));//12
// console.log(queueTime([1,2,3,4,5], 100));//5
// console.log(queueTime([22,6,28,43,46,9,33,10,11,22,12,26,17,31], 5));//79


// function stray(numbers) {
//   let a=  numbers.sort((a,b)=>a-b)
//     // console.log(a)
// if (a[0]===a[1]){
//     return a.at(-1)
// }else{
//     return a[0]
// }
// }
//
// console.log(stray([1, 1, 2]));
// console.log(stray([1, 2, 1]));
// console.log(stray([2, 1, 1]));


// function findOdd(a) {
//   if (a.length===1){
//       return a[0]
//   }
//    // a.sort((a, b) => a - b);
//     for (let i = 0; i < a.length; i++) {
//
//         let count=0
//         for (let j = 0; j < a.length; j++) {
//             if (a[i]===a[j]){
//               count=count+1
//             }
//         }
// if (count%2!==0){
//     return a[i]
// }
//         // console.log(count,a[i])
//     }
//
// }

// console.log(findOdd([1]));//1
//  console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));//5
// console.log(findOdd([1,1,2]));//2

// const binaryArrayToNumber = arr => {
//    let gg=parseInt((arr.join("")),2)
//     return gg
// };
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([1,1,0,0,1]));//25


// function findShort(s){
//    let a= s.split(" ")
//     let dlinna=a[Math.round(a.length/2)].length
//
//     for (let i = 0; i < a.length; i++) {
// if (a[i].length<dlinna){
//     dlinna= a[i].length
// }
//     }
//     return dlinna
// }

//console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


// function sortArray(array) {
//
//     let arrnechet=[]
//     let arr=[]
//     arr.length=array.length
//     for (let i = 0; i <array.length ; i++) {
//         if (array[i]%2===0){
//             arr[i]=array[i]
//         }else {
//             arrnechet.push(array[i])
//         }
//     }
//
//     let sortir=arrnechet.sort((a,b)=>a-b)
//
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===0){
//
//         }else if (!arr[i]){
//             arr[i]=sortir.shift()
//
//         }
//
//     }
//     return arr
// }

// console.log(sortArray([5, 8, 6, 3, 4,0]))//3 8 6 5 4


// function count(string) {
//     let obj={}
//     if (string.length===0){
//         return obj
//     }
//     console.log(string.split(""));
//     for (let i = 0; i <string.length ; i++) {
//         let result=0
//         if (obj[string[i]]){
//             result=obj[string[i]];
//         }
//  obj[string[i]]=result+1
//     }
//     return obj
// }
//
// console.log(count('aaabbcc'))
// console.log(count(''));
// console.log(count('abc'));


// var uniqueInOrder=function(iterable){
//
// let arr=[]
//
// if (!Array.isArray(iterable)){
//     arr=[...iterable.split("")]
// }else{
//     arr=[...iterable]
// }
//     const result = arr.reduce((acc, item) => {
//         if (acc.includes(item)) {
//             return acc; // если значение уже есть, то просто возвращаем аккумулятор
//         }
//         return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
//     }, []);
// // let newarray=[...arr]
// //     for (let i = 0; i < arr.length; i++) {
// //         newarray = [...newarray.filter((elem) => {
// //             console.log(elem,arr[i])
// //             return elem !== arr[i]})]
// //     }
// //
// //     console.log(newarray)
//     return result
// }
//
// console.log(uniqueInOrder('AAABBCcHHGgUi'));//ABCcHGgUi
// console.log(uniqueInOrder([1, 1, 2, 3, 4]));//1234


// function greet(name){
// return "Hello, "+name+" how are you doing today?"
// }

// console.log(greet('Nikita'));


// function removeChar(str){
// let one=str.slice(1,str.length-1)
//
//     return one
// }
// console.log(removeChar("Nikita"));


// function squareDigits(num){
//     let razbiv = [...num.toString()].map(Number).map(el=>el**2)
//     return Number(razbiv.join(""))
// }
//
// console.log(squareDigits(3212));


// function sumTwoSmallestNumbers(numbers) {
//
//     numbers.sort((a, b) => a - b)
// return numbers[0]+numbers[1]
//
// }
//
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));//13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));//6


// function findUniq(arr) {
//     // let a=arr[Math.round(arr.length/2)]
//     // let b=arr[0]
//     arr.forEach(element=>{
//         if (arr[0]===arr[1]&&arr[0]!==element){
//             console.log(element,"v1")
//         } else if (arr[0]!==arr[1]&&arr[0]!==element){
//             console.log(element,"v2")
//         }else {
//             if (arr[0]!==arr[1]&&arr[0]!==element){
//                 console.log(element,"v3")
//             }
//             console.log(element,"v4")
//         }
//     })
// }
// function findUniq(arr) {
//
//     arr.sort((a, b) => a - b)
//     if (arr[0]===arr[1]){
//         return arr.at(-1)
//     }else{
//         return arr[0]
//     }
//
// }
//
// console.log(findUniq([0, 0, 1]));
// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([0, 1, 0 ]));
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));


// function wave(str){
//     let arr=[]
//
//     for (let i = 0; i < str.length; i++) {
//
//         if (i===0&&str[i]!==" "){
//             arr.push(str[0].toUpperCase()+str.slice(1,str.length))
//         }
//         if (i!==str.length-1){
//
//             if (str[i+1]===" "){
//
//                 continue
//
//             }
//             arr.push(str.slice(0,i+1)+str[i+1].toUpperCase()+str.slice(i+2,str.length))
//         }
//
//     }
//     return arr
// }
//
// console.log(wave("hello"));
// console.log(wave("two words"));
// console.log(wave(" gap "));


function aa() {
    let arr = [1, 2, 3, 4, 5]
    return arr.filter((element) => {
        console.log(element, element >= 3)
        return element >= 3
    })
}

// console.log(aa());

function bb() {
    let arr = [{a: 1}, {a: 2}, {a: 3}]
    return arr.filter((element) => {
        console.log(element.a, element.a >= 3)
        return element.a >= 3
    })
}

// console.log(bb());


// function twoSum(numbers, target) {
//     let arr=[]
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < numbers.length; j++) {
//             if (numbers[i]+numbers[j]===target&&i!==j) {
//                 arr.push(i)
//                 arr.push(j)
//             }if (j!==Math.round(numbers.length/2)){
//
//             }
//         }
//     }
//     return [arr[0],arr[1]]
// }
//
// console.log(twoSum([1, 2, 3], 4));//[0,2]
// console.log(twoSum([1234, 5678, 9012], 14690));//[0,2]


// function digPow(n, p){
//     let razbiv=String(n).split("")
//     console.log(razbiv)
//     let vstepeni=razbiv.map((el, index) => {
//         console.log(Math.pow((Number(el)),index + p))
//         return Math.pow((Number(el)),index + p)});
//     console.log(vstepeni)
//     let result=0
// vstepeni.forEach((el)=>{
//     result=result+el
// })
//     console.log(result
//     )
//     // console.log(result)
//
//
//         if (result % n === 0) {
//             return result / n;
//         } else {
//             return -1;
//         }
//
//
//
// }

// console.log(digPow(89, 1));//1
// console.log(digPow(92, 1));//-1
// console.log(digPow(46288, 3));//51
// console.log(digPow(920, 0));//51
// console.log(digPow(10383,6 ));


// function tribonacci(signature,n){
//     if (n===0){
//         return []
//     }else if(n===1){
//         return [1]
//     }
//
//     let arr=[...signature]
//     for (let j = 0; j <n ; j++) {
//         let a=0
//         for (let i = j; i <arr.length ; i++) {
//             a=a+arr[i]
//         }
//         arr.push(a)
// if (arr.length===n){
//     break
// }
//     }
//     return arr
// }
// tribonacci([1,1,1],10)//1,1,1,3,5,9,17,31,57,105


// function rotate(str) {
//     let razbiv = str.split("")
// let massiv=[]
//     for (let i = 0; i < razbiv.length; i++) {
//         let arr = []
//         for (let j = i; j < razbiv.length; j++) {
//             let a = [...razbiv]
//             arr.push(a[j])
//         }
//         massiv.push( [...arr, ...[...razbiv].splice(0, i)].join(""))
//
//     }
//     return massiv
// }
//
// console.log(rotate("Hello"));




