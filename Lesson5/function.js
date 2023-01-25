//Переменные
//Идентификатор может начинаться с букв a-z, A-Z, $, _  после этих символов может
// содержать любые из этих же символов включая цифры 0-9
//Не можем использовать зарезервированные ключевые слова
// for, if, else, true, false

// Оюласть видимости функции
//var
//Если переменная объявлена на верхнем уровне то - она принадлежит глобальной области видимости
//А если объявлена внутри функции то она принадлежит функциональной области видимости
// var a=5
// function f (){
//     var b=6
//     console.log(a)
//     console.log(b)
// }
// f()
// console.log(a)
// console.log(b)


// Поднятие либо всплытие переменной hosting

// function testHosting(){
//     console.log(a)
//     var a=5
//     console.log(a)
// }
// testHosting()
// var a=5
// testHosting()// определенно при помощи function поэтому работает
// function testHosting(){
// b=3
//     console.log(a)
//     var b// всплыло на 33 строчку
// }
//
// console.log(a)


//Вложенные области видимости
// function f1(){
//     var a=1
//     function f2(){
//         var b=2
//         function f3(){
//             var c=3
//             console.log(a,b,c)//1,2,3
//         }
//        f3()
//         console.log(b)
//     }
//     f2()
//     console.log(a)
// }
// f1()
//
// function feast(beast, dish) {
//     if (beast[0]==dish[0]&&beast[beast.length-1]==dish[dish.length-1]){
//         return true;
//     }else{
//         return false;
//     }
// }
//
// console.log(feast("great blue heron", "garlic naan"));


// function f4(){
//     var a = 25
//     if(a>=1){
//         let b=2
//         if(a>=2){
//             let c =23
//             console.log(a,b,c)
//         }
//     }
//   //  console.log(b)
// }
// f4()
//Условные операторы
// function f5(a){
//     if(a==2){
//         console.log("2");    //что-то делаем
//     }
//    else if (a==3){ //дополнительное условие else if, а если просто if, то это новое условие
//         console.log("3");
//     }else {
//         console.log("что-то другое");
//     }
// }
// f5(2)
// f5(3)
// f5(5)

function f6(a) {
    switch (a) {
        case 2:
            console.log(2)
            break;
        case 3:
            console.log(3)
            break;
        case 4:
            console.log(4)
            break;
        default:
            console.log("выполняется всегда если не один кейс не выполнился")
            break;
    }
}

// f6(3)
// f6(7)

// function f7(a){
//     (a==4) ?console.log("Выполняется если условие истинно"): console.log("Выполяется если условие ложное")//?-это true
//
// }
// f7(4)
// f7(5)


// function f8(a){
//     //при проверке нескольких условий не использовать
//     (a==4) ?console.log("Выполняется если условие истинно"): (a==5)? console.log("5"):console.log("Выполняется ложное")//?-это true
//
// }
//
// f8(5)
// f8(6)


//Strict mode
//'use strict'

// function f9(){
//     'use strict'
//     a=1
//     console.log(a)
// }
// f9()


//Функция как значение


// let helloMessage=function f10(){
//     console.log("Hello")
//     return 2
// }
// //
// // console.log(helloMessage)
//
//
// function f11(func){
//     func()
// }
// // f11(helloMessage)
//
//
//
// const annonimFunction=function (){
//     return "Привет"
// }
// const annonimFunction2=function (){
//     return "Привет2"
// }
// const annonimFunction3=()=>"Привет3"
//
// function sendMessage(func){
//     console.log(func())
// }
// sendMessage(annonimFunction)
// sendMessage(annonimFunction2)
// sendMessage(annonimFunction3)

//Выражения немедленно вызываемых функций (IIFEs) Immediately Invoked Functions Express


// (function f12(){
//     console.log("Привет")
// })()


//на сайте learn.javascript.ru прочитать пункт 2.10    2.13   2.15   в конце задания попытаться решить +задачи гитхаб
//Напишите скрипт, который используя оператор while выведет все числа от 45 до 67

// function f13(){
//     let a=45
//     while (a<67){
//         a=a+1
//         console.log(a)
//     }
// }
// f13()

//Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
// function f14(){
//     let a = 45;
//     while (a<670) {
//     a=a+1
//         if (a%10===0){
//             console.log(a)
//         }
//     }
//
// }
//
// f14()


// for(var i=0;i<=100;i=i+1){
//     console.log(i)
// }
// function f16() {
//     for (let a=45;a<=67;a=a+1){
//         console.log(a)
//     }
// }
// f16()


// function f17(){
//     for (let a=45;a<=670;a=a+1){
//         if (a%10===0){
//             console.log(a)
//         }
//     }
// }
// f17()
//Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт,
// который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)(switch)
// function f15(n){
//     switch (n) {
//         case 0:
//             console.log("ноль")
//             break;
//         case 1:
//             console.log("один")
//             break;
//         case 2:
//             console.log("два")
//             break;
//         case 3:
//             console.log("три")
//             break;
//         case 4:
//             console.log("четыри")
//             break;
//         case 5:
//             console.log("пять")
//             break;
//         case 6:
//             console.log("шесть")
//             break;
//         case 7:
//             console.log("семь")
//             break;
//         case 8:
//             console.log("восемь")
//             break;
//         case 9:
//             console.log("девять")
//             break;
//         default:
//             console.log("Error")
//
//     }
// }
// f15(0)
// f15(1)
// f15(2)
// f15(3)
// f15(4)
// f15(5)
// f15(6)
// f15(7)
// f15(8)
// f15(9)
// f15(25)
//на сайте learn.javascript.ru прочитать пункт 2.10    2.13   2.15   в конце задания попытаться решить +задачи гитхаб


//Даны три числа. Найти среднее из них.
function averageValue(a, b, c) {
    if (!a || !b || !c) {
        return "Error"
    }
    if (a <= b && b <= c) {
        return b;
    } else if (c <= b && b <= a) {
        return b;
    } else if (b <= a && a <= c) {
        return a;
    } else if (c <= a && a <= b) {
        return a;
    } else if (a <= c && c <= b) {
        return c;
    } else if (b <= c && c <= a) {
        return c;
    } else if (a === b && b === c) {
        return a;
    }


}


// averageValue(4, 10, 15)

//В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно.
// Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в size.
// Подсказка var size = 120, //некоторый размер данных unit = "Кб" //т.е. 
// единица измерения — килобайты Найти сколько байт содержит 120Кбайт, т.е. ответ должен быть 122880 байт 
// (т.е. если Кб, то 1024 * 120), скрипт надо построить с учётом того, что могут попадаться и другие единицы измерения.

function unitConversion(size, unit) {
    const DEFAULT_VALUE=1024
    if (unit === "Гб") {
        // return `${size * 1024 * 1024 * 1024} байт`
        return `${size * DEFAULT_VALUE **3} байт`
    } else if (unit === "Кб") {
        return `${size * DEFAULT_VALUE} байт`
    } else if (unit === "Мб") {
        // return `${size * 1024 * 1024} байт`
        return `${size * DEFAULT_VALUE **2} байт`
    } else {
        return "Error"
    }
}

unitConversion()
module.exports = {averageValue, unitConversion}
