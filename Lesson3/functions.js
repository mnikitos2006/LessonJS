// "string" строка
// "number" число
// bigInt большое число (es6)
// boolean логическое значение
// null пустое значение
// undefined неопределённое значение
// object объект
// symbol символ(es6)

var a
console.log(typeof (a)) //"undefined"
a = "Hello world"
console.log(typeof (a))//string
a = 5
console.log(typeof (a))//number
console.log(typeof (typeof (2)))//string
a = true
console.log(typeof (a))//boolean
a = null
console.log(typeof (a))//object
a = {}
console.log(typeof (a))//object
a = {a: "1", b: "2", name: "Ivan"}
a = Symbol()
console.log(typeof (a))//symbol
a = BigInt(1)
console.log(a)
console.log(typeof (a))//BigInt

function f() {
    return 1
}

console.log(typeof f())

//Объект

var object = {
    name: "Иван", "last name": "Иванов", address: {
        city: "Krasnodar", street: "Krasnaya street"
    }
}
console.log(object)
console.log(object.name)
console.log(object["last name"])
console.log(object.address.city)
console.log(object.address.street)
console.log(object.address.stree)

var object2 = object
console.log(object.name)
console.log(object2.name)
object2.name = "Маша"
console.log(object.name)
console.log(object2.name)
var getName = "name"
console.log(object[getName]);

//"Массивы"(частный случай объекта)
var array = ["колбаса", "масло", "конфета"]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array.length)
// var a={
//     0:"a"
//     1:"b"
//     2:"c"
// }


//Функции (подтип объекта)
function foo() {
    return 43
}

console.log(foo, typeof (foo))
foo.privet = "Hello world"
console.log(foo, typeof (foo))
console.log(foo.privet, typeof (foo.privet))
console.log(typeof (foo()))


//Методы встроенных типов

// var a="Строка"
// a.toLocaleLowerCase()
// console.log(String())
// String(a).toLocaleLowerCase()


let g = "number"

let b = 25

let c = {a: 25, b: "25"}

let d = c.a

let e = c["b"]

console.log(typeof (g))
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (e))


//Создайте объект студент. У объекта студент должны быть следующие свойства:
// имя, возраст, адрес проживания. Адрес проживания также должен быть объектом,
// со следующими свойствами: Город, улица, номер дома

var student={
    name:"Влад",
    age:16,
    address:{
        city:"Krasnodar",
        street:"Krasnaya",
        numberHome:"13/1"
    }
}
//Ещё 2 создать и в array commit and push

var student1={
    name:"Илья",
    age:17,
    address:{
        city:"Moscow",
        street:"Pyshkina",
        numberHome:"12"
    }
}
var student2={
    name:"Георгий",
    age:18,
    address:{
        city:"Rostov",
        street:"Rostovskaya",
        numberHome:"15"
    }
}
var array = [student, student1, student2]
console.log(array[0])
console.log(array[1])
console.log(array[2])
