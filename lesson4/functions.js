const {MESSAGE_TO_STRING,MESSAGE_TO_NUMBER} = require("./constants");
//Сравнение значений
//Результат сравнения - логическое значение true / false
// let a =2
// let b =2
// console.log(a == b);//true
// console.log(a != b);//false

// Приведение типов
// явное приведение
function example1() {
    var a = 6
    a = String(a)
    console.log(typeof (a))
}

//example1()
// неявное приведение
function example2() {
    var a = "42"
    var b = a * 2
    console.log(b)
}

//example2()
function example3(a) {
    if (typeof (a) == "number") {
        return a * 2
    } else {
        return "Введённое значение не корректно"
    }

}

// console.log(example3(3));
// console.log(example3("Строка"));

//Псевдоложные и псевдоистинные значени------как будто ложные или истинные


//псевдоложные
function example4() {
    var a = ""
    console.log(Boolean(a))
    var a = 0
    console.log(Boolean(a))
    var a = -0
    console.log(Boolean(a))
    var a = NaN
    console.log(Boolean(a))
    var a = false
    console.log(Boolean(a))
}

// example4()


//псевдоистинные значения
function example5() {
    var a = "hello"
    console.log(Boolean(a))
    var a = " "
    console.log(Boolean(a))
    var a = true
    console.log(Boolean(a))
    var a = []
    var a = {}
    var a = function a() {
    }
    console.log(Boolean(a))
    var a = undefined
    console.log(Boolean(a))
}

// example5()


//Равенство
//==, ===, !=,!==
//===,!== Строгое равенство проверяет тип и значение(Запрещено приведение типов)
//==, != Не строгое равенство проверяет только значение(Происходит приведение типов)

function example6() {
    var a = 42
    var b = "42"
    console.log(a == b)
    console.log(a === b)
}

// example6()

function example7(a, b) {
    return a == b
}

function example8(a, b) {
    return a === b
}


//Неравенство
//<, >, <=, >=

function example9(a, b) {
    return a < b
}


//Задача 1
function example10() {
    console.log("true+false...", true + false)
    console.log("12 / \"6\"...", 12 / "6")
    console.log("number + 15 + 3...", "number" + 15 + 3)
    console.log("5 + 3 + number...", 5 + 3 + "number")
    console.log("[1] > null...", [1] > null)
    console.log("\"foo\" + + \"bar\"...", "foo" + +"bar")
    console.log("'true' == true...", 'true' == true)
    console.log("false == 'false'...", false == 'false')
    console.log(" null == ''...", null == '')
    console.log("!!\"false\" == !!\"true\"...", !!"false" == !!"true")
    //   console.log("[‘x’] == ‘x’...",[‘x’] == ‘x’)
    console.log("[] + null + 1...", [] + null + 1)
    console.log("0 || \"0\" && {}...", 0 || "0" && {})
    console.log("[1,2,3] == [1,2,3]...", [1, 2, 3] == [1, 2, 3])
    console.log("{}+[]+{}+[1]...", {} + [] + {} + [1])
    console.log(" !+[]+[]+![]...", !+[] + [] + ![])
    console.log("new Date(0) - 0...", new Date(0) - 0)
    console.log("new Date(0) + 0...", new Date(0) + 0)

}

// example10()

// function example11(a,b){
//
//     if (a>b){
//         return "a>b";
//     }
//     else {
//         return "b>a";
//     }
//     if (typeof (a)=="string", typeof (b)=="string"){
//         return b;
//     }
//     else{
//         return a;
//     }
//     if (typeof (a)=="number"< typeof (b)=="number"){
//         return b;
//     }
//     else{
//         return a;
//     }
//     if (typeof (a)=="number"< typeof (b)=="string"){
//         return "Не корректно сравнивать строку с числом.";
//     }
//     if (typeof (a)=="string"< typeof (b)=="number"){
//         return "Не корректно сравнивать строку с числом.";
//     }
// }
// example11()
// console.log(example11(2,4,"<"))
//Написать программу, которая принимает три аргумента: два элемента для сравнения и знак сравнения.
// Если пользователь ввел строки, то сравнивать как строки, если ввел числа, то сравнивать как числа.
// Если ввел один аргумент число, а второй аргумент строку, выдать сообщение о том что не корректно сравнивать строку с числом.
// Написать тесты. Обработать такие значения как null, undefined.
//
// console.log(example(2,4,"<")) true
//
// console.log(example("Kit","Kot,"<")) false

//Задача 2

function compareValues(a,b,c,message) {

    if (c == "<") {
        if (a < b) {
            return a;
        } else if (a > b) {
            return b;
        } else {
            return message;
        }
    } else if (c == ">") {
        if (a > b) {
            return a;
        } else if (a < b) {
            return b;
        } else {
            return message;
        }
    }

}

function getMaxOrMinValue(a, b, c) {
    if (!c){
        return "Отсутствует знак";
    }
    if (typeof (a) == "string" && typeof (b) == "string") {
        // if (c=="<"){
        //     if (a<b){
        //         return a;
        //     }else if (a>b){
        //         return b;
        //     }else{
        //         return "Строки равны";
        //     }
        // }else if (c==">"){
        //     if (a>b){
        //         return a;
        //     }else if (a<b){
        //         return b;
        //     }else {
        //         return "Строки равны";
        //     }
        // }

       return  compareValues(a,b,c,MESSAGE_TO_STRING)
    } else if (typeof (a) == "number" && typeof (b) == "number") {

        // if (c=="<"){
        //     if (a<b){
        //         return a;
        //     }else if (a>b){
        //         return b;
        //     }else{
        //         return "Числа равны";
        //     }
        // }else if (c==">"){
        //     if (a>b){
        //         return a;
        //     }else if (a<b){
        //         return b;
        //     }else {
        //         return "Числа равны";
        //     }
        // }
      return   compareValues(a,b,c,MESSAGE_TO_NUMBER)
    } else if (typeof (a) == "number" && typeof (b) == "string") {
        return "Не корректно сравнивать строку с числом.";
    } else if (typeof (a) == "string" && typeof (b) == "number") {
        return "Не корректно сравнивать строку с числом.";
    } else {
        return "Error";
    }

}

getMaxOrMinValue()
console.log(getMaxOrMinValue(2, 4, "<"))
module.exports = {example3, example7, example8, example9, getMaxOrMinValue}




