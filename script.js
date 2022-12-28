// Урок1

// b=5
// a=

// Равнозначно

// a=5*2
// a=10

// a,b-переменные
// 5-значение
// =,*-операции

// var a=5

//вывод
// console.log(a) // Вывод в консоль
// alert(a)   // Вывод сообщений в браузере

// Взаимодействие с пользователем
// var name=prompt(message: "То что выведется в сообщении")
// name куда запишется результат ввода, тип данных строка!!!


// Взаимодействие с пользователем при помощи вопроса
// var a=confirm("закрыть окно?")
// alert(a)
// a куда запишется результат работы confirm, тип данных boolean(логический тип по типу да нет)

// Операции

// *,/,+,- математические операции
// = оператор присваивания


// var summa
// console.log("summa",summa)
//
// var number1=5
// var number2=10
//
// summa=number1+number2
// console.log("summa",summa)


// Типы данных

// Строка str
// var str="Я строка"
// var str1="8"
// console.log(str1+str1)

//Число Number
// var number = 8
// console.log(number * number)

// Логическое значение Bolean(да/нет     true/false)
// var a = 6
// var b = 7
// console.log(a,"==",b,a==b)
// console.log(a,"<",b,a<b)


// var type="5"
// console.log(type)
// type=5
// console.log(type)
// type=true
// console.log(type)

// Преобразование типов
// Явное приведение
// var a="25"
// console.log(typeof a)
// var b=30
// a=Number(a)
// console.log(typeof a)
// var summ=a+b
//var summ= Number(a)+b
// console.log(summ)


// Неявное преобразование
// var a=5
// var b="6"
// console.log(a + b)
//
// var c=true
// var d=2
// console.log(c + d)

// var r=5
// var h="5"
// console.log(r * h)

// var e=10
// var w="5"
// console.log(e-w)



// var TAX_RATE=0.2
// var iscreamTax=200*TAX_RATE
// var carTax=100000*TAX_RATE
// console.log(carTax)
// console.log(iscreamTax)

//Урок2

//Блок{}

// let b=10
// {
//     let a=10
//     console.log(a + b)-можно
// }
// console.log(a)-нельзя


// let count=10
// if(count>5){
//     console.log("Privet")
//     if(true){
//         // код выполнится
//     }
// }

// Условная конструкция
// let age=11
//
// if(age>=18){
//     console.log("goden v armiy")
// }
// else{
//     console.log("slichkom molodoiy")
//
// }
//
//
//
// switch (age){
//     case 18:{
//         console.log("goden v armiy")
//         break // приостанавливает дальнейшее выполнение
//     }
//     default:{
//         console.log("slichkom molodoiy")
//     }
// }
//
// // тернарный оператор
//
// // условие ? если условие верно : условие не верно
//
// age >=18?console.log("goden v armiy"): console.log("slichkom molodoiy")



// Циклы
// цикл- это повтор набора действий пока не нарушится определённое условие

//for - цикл с параметром
//while - цикл с условием
//do while - цикл с условием который выполнится в любом случае 1 раз

//
// var i=0
// while (true){
//     console.log(i)
//     if(i===8000){
//         break//-ostanovka цикла
//     }
//     i=i+1
// }
// console.log("vse")



// for(var i=0;i<=100;i=i+1){
//     console.log(i)
// }





// var j=0 //инициализация
// while (j<=100){ //проверка
//     console.log(j)
//     j=j+1 // обновление значения
//
// }



// Функции


// var a=5
// var b=10
// function summa(num1,num2){
//     console.log(num1+num2)
// }
// summa(a,b)


// function newSumma(sum1,sum2){  //4,5
//    // let summa=sum1+sum2  //4+5
//     return sum1+sum2//summ  //9
// }
// console.log(newSumma(4,5))


// var ARCHER="archer"
// var GOBLIN="goblin"
// var EMPLOYEE="employee"
// function createArcher(){
//     console.log("Создание лучника")
// }
// function createEmployee(){
//     console.log("Создание работника")
// }
// function createGoblin(){
//     console.log("Создание гоблина")
// }
// function createCharacter(character){
//     if(character===ARCHER){
//         createArcher()
//     }
//     if(character===GOBLIN){
//         createGoblin()
//     }
//     if(character===EMPLOYEE){
//         createEmployee()
//     }
// }
//
// console.log("Старт игры")
// console.log("Выберите персонажа")
// createCharacter("archer")
// createCharacter("goblin")
// createCharacter("employee")
// console.log("Конец игры")

















    //Задача1
// let a=1
// let b=a*60*60
// console.log(b)



    //Задача2
// let a=10
// let b=2
// let c
// console.log(c=a*b)
// console.log(c=a+b)
// console.log(c=a-b)
// console.log(c=a/b)


    //Задача3
// let a=17
// let b=10
// let c=a-b
// let d=7
// let result=c+d
// console.log(result)




    //Задача4
// var str1='Привет,'
// var str2='Мир!.'
// console.log(str1+str2)




    //Задача5
// let name="Никита!"
// console.log("Привет,"+name)




    //Задача6
// let age="16"
// console.log("Мне "+age+" лет")




    //Задача7

// let a=1
// let b=a*60*60
// console.log(b+"-количество секунд в часе")
//
// let c=1
// let d=c*60*60*24
// console.log(d+"-количество секунд в сутках")
//
// let e=1
// let j=e*60*60*24*31
// console.log(j+"-количество секунд в месяце")


    //Задача8
// let hour = "10"
// let minute = "10"
// let seconds = "10"
// console.log(hour+":"+minute+":"+seconds)


    //Задача9










