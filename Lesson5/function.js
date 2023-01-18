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
function f1(){
    var a=1
    function f2(){
        var b=2
        function f3(){
            var c=3
            console.log(a,b,c)//1,2,3
        }
       f3()
        console.log(b)
    }
    f2()
    console.log(a)
}
f1()