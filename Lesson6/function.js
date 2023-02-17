// //Массив- это упорядоченная коллекция данных
// //Создание массива
// let newArray=new Array()
// console.log(newArray)
//
// let newArray2=[]
// console.log(newArray)
//
// let fruits=["Яблоко","Апельсин","Слива"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
//
// //Доступ к элементу
// fruits[0]
//
// //Добавить элемент
// fruits[3]="Лимон"
// console.log(fruits)
// //Замена
// fruits[1]="Банан"
// console.log(fruits)
//
//
// //Длина массива
// console.log(fruits.length);
//
// //Получить последий элемент массива
//
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1))
//
// // fruits[123]="Черешня"
// // console.log(fruits)
// // console.log(fruits.length)
//
//
// //Методы pop-удаляет push-добавляет
// fruits[fruits.length]="Черешня"
// console.log(fruits)
//
//
// console.log(fruits.push("Инжир"));
// console.log(fruits.push("Инжир"));
// console.log(fruits.push("Инжир"));
// console.log(fruits.push("Инжир"));
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)

//Почитать массива на леарн джава скрипт

// let fruits = ["Яблоко", "Апельсин", "Слива"]
// //Метод push
// console.log(fruits.push("Инжир"));
// console.log(fruits)

// function  myPush(arr,newElement){
//     let count = 0
//     for (let i = 0; i<arr.length; i++){
//        count=count+1
//     }
//     arr[count]=newElement
//     // console.log(arr)
//     return count
// }
// myPush(fruits,"Элемент")

// function myPush2(arr,newElement){
//     let count=0
//     console.log(arr)
//     while (true){
//         if(arr[count]){
//             console.log(count,arr[count])
//             count=count+1
//         }
//         else{
//             console.log("Error")
//             break
//         }
//     }
//     arr[count]=newElement
//     return count
// }
// // myPush2(fruits,"Инжир")
//
//
//
//
// function myLength(arr) {
//     let count = 0
//     while (true) {
//         if (arr[count]) {
//             count = count + 1
//         } else {
//             break;
//         }
//     }
//     return count
// }

// // console.log(myLength(fruits));
//
// console.log(fruits)
// for (let i = 0; i<myLength(fruits); i++){
//     console.log(fruits[i])
// }


//Метод pop удаляет последний элемент в массиве и возвращает его
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// function myPOP(arr) {
//     const temp = arr[myLength(arr) - 1]
//     delete arr[myLength(arr) - 1]
//     // arr.length=myLength(arr)
//     arr.splice(2, 2)
//     return temp
//
// }

// console.log(fruits)
// console.log(myPOP(fruits))
// console.log(fruits)


//shift/unshift/splice/slice
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)
//Очередь----это последним пришёл, последний ушёл(очередь в магазине) она реализуется 2-умя методами: push/shift
//Стек-------это последний пришёл, первый ушёл(колода карт) она реализуется 2-умя методами: push/pop

// function myShift(arr) {
//     let temp = arr[0]
//     delete arr[0]
//     arr.splice(0, 1)
//     return temp
// }

// console.log(myShift(fruits))
// console.log(fruits)

// const obj = {
//     name: "Вася"
// }
// console.log(obj["name"]);
// const arr=["Вася"]
// console.log(arr[0]);


//Цикл for of

// for (const i of fruits) {
//     console.log(i)
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }
// fruits1 = ["Яблоко", "Апельсин", "Слива"]
// fruits[500] = "Дыня"
// console.log(fruits.length)
// console.log(fruits)
// console.log(fruits === fruits1);
//
// function equals(arr, arr1) {
//     for (let i = 0; i < arr.length; i++) {
//         let equals = true
//         if (arr[i] == arr1[i]) {
//
//         } else {
//             equals = false
//         }
//         return equals
//     }
// }
//
// console.log(equals(fruits, fruits1))


// Методы массивов


//splice нам нужен для удаления замены или вставки элемента в массив

const array = ["apple", "banana", "lemon", "lemon1", "lemon2", "banana"]
// console.log(array.concat("gg","bb"));
// console.log(array.slice(1, 4));
// console.log(array.splice(1, 4));
//arr.splice(index,deleteCount,elem1,.......,elemN)
//index-с какой позиции начинаем работу
//deleteCount-количество удалённых элементов
//elem1-то что будет вставленно вместо удалённых элементов

//удаление


// console.log(array.splice(1, 2));
// console.log(array)


//удаляем и заменяем эти элементы

// console.log(array.splice(1, 1, "plum", "plum"));
// console.log(array)


// console.log(array.splice(2, 1, "plum", "plum"));
// console.log(array)

// console.log(array.splice(1, 0, "plum"));
// console.log(array)

const users =
    [
        {
            "createdAt": "2023-01-31T12:48:39.601Z",
            "name": "Hortense",
            "surname": "Lowe",
            "full_name": "Elsa Koelpin MD",
            "AdressId": 1,
            "age": 9,
            "id": "1",
            "gender": "male"
        },
        {
            "createdAt": "2023-01-31T20:18:37.468Z",
            "name": "Jacinto",
            "surname": "DuBuque",
            "full_name": "Lox",
            "AdressId": 2,
            "age": 1,
            "id": "2",
            "gender": "male"
        },
        {
            "createdAt": "2023-02-01T06:12:26.640Z",
            "name": "Jordy",
            "surname": "Berge",
            "full_name": "Willard Hilll",
            "AdressId": 3,
            "age": 1,
            "id": "3",
            "gender": "male"
        },
        {
            "createdAt": "2023-01-31T19:21:13.990Z",
            "name": "Elizabeth",
            "surname": "Braun",
            "full_name": "Donna Leannon",
            "AdressId": 4,
            "age": 5,
            "id": "4",
            "gender": "female"
        },
        {
            "createdAt": "2023-01-31T12:30:46.909Z",
            "name": "Theodora",
            "surname": "Anderson",
            "full_name": "Danny Howe",
            "AdressId": 5,
            "age": 1,
            "id": "5",
            "gender": "female"
        },
        {
            "createdAt": "2023-02-01T06:15:49.606Z",
            "name": "Bernie",
            "surname": "Stiedemann",
            "full_name": "Rolando Grant",
            "AdressId": 6,
            "age": 1,
            "id": "6",
            "gender": "female"
        },
        {
            "createdAt": "2023-01-31T14:26:39.766Z",
            "name": "Bria",
            "surname": "Collier",
            "full_name": "Betsy Stanton",
            "AdressId": 7,
            "age": 5,
            "id": "7",
            "gender": "female"
        },
        {
            "createdAt": "2023-02-01T01:51:06.456Z",
            "name": "Jo",
            "surname": "Gleichner",
            "full_name": "Darrell Boehm",
            "AdressId": 8,
            "age": 4,
            "id": "8",
            "gender": "female"
        },
        {
            "createdAt": "2023-02-01T00:21:37.501Z",
            "name": "Alberta",
            "surname": "Windler",
            "full_name": "Wallace Schmidt",
            "AdressId": 9,
            "age": 1,
            "id": "9",
            "gender": "female"
        },
        {
            "createdAt": "2023-01-31T20:32:42.136Z",
            "name": "Tristin",
            "surname": null,
            "full_name": "Jody Rowe",
            "AdressId": 10,
            "age": 2,
            "id": "10",
            "gender": "female"
        }
    ]

const addressList = [
    {id: 1, name: "Moreno Valley"},
    {id: 2, name: "Irving"},
    {id: 3, name: "Pensacola"},
    {id: 4, name: "Donna Leannon"},
    {id: 5, name: "Hacienda Heights"},
    {id: 6, name: "Overland Park"},
    {id: 7, name: "Bethesda"},
    {id: 8, name: "Boynton Beach"},
    {id: 9, name: "Pasadena"},
    {id: 10, name: "Southaven"}
]

function customSplice(arr, index, deleteCount, ...rest) {
    //index=1
    //deleteCount=3
    const newArray = []
    const temp = []
    for (let i = 0; i < deleteCount; i++) {
        temp.push(i)
    }
    let count = -1
    let flag = false
    let insert = [...rest]
    while (true) {
        flag = false
        count = count + 1
        if (!arr[count]) {
            break
        }
        for (const number of temp) {
            if (count === index + number) {
                flag = true
            }
        }
        if (flag) {
            if (insert[0]) {
                for (const insertElement of rest) {
                    console.log(insert)
                    newArray.push(insert.shift())
                }
            }
            continue
        }
        newArray.push(arr[count])
    }
    return newArray
}

// customSplice(array, 2, 2, "ban","ban2","ban3","ban5")


//slice
//arr.slice(indexStart,indexEnd)
//если не передаём аргументов то возвращается копия массива
// console.log(array)
// console.log(array.slice(4,5));
// console.log(array)


function customSlice(arr, start, end) {
    const newArray = []
    const temp = []
    for (let i = start; i < end; i++) {
        temp.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        if (!start && !end) {
            newArray.push(arr[i])
            continue
        }
        for (const tempElement of temp) {
            if (i === tempElement) {
                newArray.push(arr[i])
            }
        }
    }
    return newArray
}

customSlice(array, 4, 5)
// console.log(array.slice(4, 5));

//concat
//arr.concat(arg1,arg2,..........)=> [arg1,arg2,.....]

// let newArray=[]
//
// newArray=array.concat("Banan1","Banan2",["Vishnya","Arbyz"])
// console.log(newArray)


function customConcat(arr, ...rest) {
    let newArr = [...arr]
    for (const restElement of rest) {
        if (Array.isArray(restElement)) {
            newArr = [...newArr, ...restElement]
            continue
        }
        newArr = [...newArr, restElement]
    }
    // for (const arrElement of arr) {
    //     newArr.push(arrElement)
    // }
    // for (const restElement of rest) {
    //     if(Array.isArray(restElement)){
    //         for (const restElementElement of restElement) {
    //             newArr.push(restElementElement)
    //         }
    //         continue
    //     }
    //     newArr.push(restElement)
    // }
    return newArr
}

// customConcat(array, "Банан1", "Банан2", ["Банан3", "Банан4"], ["Банан5", "Банан6"])

//перебор свойств массива forEach
//arr.forEach(function(item,index,array){
// что-то делает с item
// })
//forEach НИЧЕГО НЕ ВОЗВРАЩАЕТ

// array.forEach(function (item,index,arr){
//     console.log("item",item+" !")
//     console.log("index",index)
//     console.log("arr",arr)
//     console.log("////////////")
// })


// array.forEach((item,index,arr)=>{
//     console.log("item",item+" !")
//     console.log("index",index)
//     console.log("arr",arr)
//     console.log("////////////")
// })


// const fullNameList=[]
// const userNameListAgeEqual2=[]
// users.forEach((user)=>{
//     console.log(` Полное имя пользователя c id :${user.id} ${user.name} ${user.surname}`)
//     console.log("///////////")
//     fullNameList.push(`${user.name} ${user.surname}`)
//     if (user.age===2){
//         userNameListAgeEqual2.push(`${user.name}`)
//     }
// })
// console.log(fullNameList)
// console.log(userNameListAgeEqual2)
//
//
// console.log(array)


function getElement(elem, index, arr) {
    console.log("elem", elem)
    console.log("index", index)
    console.log("arr", arr)
    console.log("/////////////")
}

function customForEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i, array)
    }
}

// customForEach(array,getElement)


function getUserName(user, index, arr) {
    console.log(`${user.name}`)
    console.log("/////////////")
}

// customForEach(users,getUserName)


function getUserAge(user) {
    console.log(`${user.age}`)
    console.log("/////////////")
}

// customForEach(users,getUserAge)

function getUserNameAndAge(user) {
    console.log(`Имя пользователя : ${user.name} и его возраст : ${user.age}`)
    console.log("/////////////////")
}

// customForEach(users,getUserNameAndAge)

const ageList = []
const fullNameList = []
let sumAge = 0

function getAge(user) {
    ageList.push(user.age)
}

// customForEach(users,getAge)
// console.log(ageList)

function getSumAllAges(item) {
    sumAge = sumAge + item
}

// customForEach(ageList,getSumAllAges)
// console.log(sumAge)
// console.log(ageList)

function getFullName(user) {
    fullNameList.push(user.full_name)
}

// customForEach(users,getFullName)
// console.log(fullNameList)


// поиск в массиве
// indexOf/lastIndexOf и includes

//arr.indexOf(item,from) item-то что ищем   from- с какой позиции начинаем поиск
//Возвращаем индекс элемента,иначе возвращает -1

//arr.lastIndexOf(item,from) item-то что ищем   from- с какой позиции начинаем поиск
//Возвращаем индекс элемента,иначе возвращает -1
//поиск начинается с право на лево

//arr.includes(item,from)  item-то что ищем   from- с какой позиции начинаем поиск
// возвращается true/false

//поиск с начала
// console.log(array.indexOf("banana"))
// console.log(array[array.indexOf("banana")])
// console.log(array.indexOf("banana", array.indexOf("banana")+1))


//поиск с конца
// console.log(array.lastIndexOf("banana"))
// console.log(array.lastIndexOf("banana", array.lastIndexOf("banana")-1))

// console.log(array.includes("banana"))


// Метод find и findIndex
//let result = arr.find(function(item,index,array){
//если нашли вернул элемент(item),завершили поиск
//если не нашли возвращается undefined
//)}


// let user =users.find(function (user){
//     return user.age===2
// })
//
// let user1=users.find(user=>user.age===2)
// console.log(user)
// console.log(user1)
// let user2=users.findIndex(user=>user.age===2)
// console.log(user2)


// function getElement(user, elem) {
//     return user.age === elem
// }
//
// function customFind(arr, func, elem) {
//     let findElement = undefined
//     for (const arrElement of arr) {
//         if (func(arrElement, elem)) {
//             findElement = arrElement
//             break
//         }
//
//     }
//     return findElement
// }

// console.log(customFind(users, getElement, 4));
// console.log(array)


//filter
//filter возвращает новый массив
//arr.filter(function(item,index,array){
// если в return true то элемент будет добавлен в новый массив в противном случае нет
// })

// const newArr=users.filter(function (user){
//     return user.age===9
// })
// console.log(newArr)
// console.log(newArr.length)

function getMale(elem) {
    return elem.gender === "male"
}

function customFilter(arr, func) {
    let newArray = []
    // for (let i = 0; i < arr.length; i++){
    //     if (func(arr[i])===true){
    //         newArray.push(arr[i])
    //     }
    // }
    for (let arrElement of arr) {
        if (func(arrElement) === true) {
            newArray.push(arrElement)
        }
    }
    return newArray

}


// console.log(customFilter(users, getMale));


//Преобразование массива map
//let result=arr.map(function(item,index,array){
// return возвращается новое значение вместо элемента
//}

// const newUsers = users.map(function (user) {
// return user
// return user.age
// return user.name
// return {...user,car:"newCar",name:user.name+"!"}
//     console.log(user.AdressId)
//     let address=addressList.find(function (item){
//         return user.AdressId===item.id
//     })
//     console.log(address)
//     return{...user,addressName:address.name}
// })
//let result = arr.find(function(item,index,array){
//если нашли вернул элемент(item),завершили поиск
//если не нашли возвращается undefined
//)}
// console.log(newUsers)
// function getElement1(elem) {
//     return elem.name
// }
//
function customMap(arr, func) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(func(arr[i]))
    }
    return newArray
}

// console.log(customMap(users,getElement1));


//arr.sort(fn)


// const left=[3,4,2,1]
// const right=[6]
// const temp=5
// //////////////////////////////
// //left
// const leftArray=[3,2,1]
// const temp=4
// const left=[3,2,1]
// const right=[]
// //////////////////////////////
// //right
// const leftArray=[]
// const temp=6
// //////////////////////////////
// //left
// const leftArray=[3,1]
// const temp=2
// const left=[1]
// const right=[3]
//
// //left
// const temp=1
// //right
// const temp=3
// [1,2] [3]    [4],[6]
//"3">"4"
//"3">"1"
//"3">"15" сравнивает по первому числу,потом по второму
//[1,3,4]
// console.log("1">"15")
// console.log("2">"15")
// console.log("3">"15")
// const arrNumber = [15, 3, 4, 5, 6, 2, 1]
//
// function compare(a, b) {
//     if (a > b) {
//         return 1
//     }
//     if (a === b) {
//         return 0
//     }
//     if (a < b) {
//         return -1
//     }
//
// }
//
// arrNumber.sort((a, b) => a - b)
// arrNumber.sort(function (a, b) {
//     return a - b
// })
// arrNumber.sort(function (a, b) {
//     return compare(a, b)
// })
// arrNumber.sort((a, b) => compare(a, b))
//
//
// users.sort((a, b) => (a.age - b.age))
// users.sort((a, b) => (a.name ||"-" - b.name ||"-"))
// // arrNumber.sort(compare)
// console.log(users)
// console.log(arrNumber)


//1. Вывести значения всех элементов массива и соответствующие им индексы:
//
// Индексу 0 - соответствует число 42
// Индексу 1 - соответствует число 65
const anyNumbers = [42, 65, 49, 68, 56, 90,47, 90,90,70, 42, 51, 35, 58, 63, 40, 70];
anyNumbers.forEach(function ff(number,index){
 //   console.log(`индексу ${index} соответствует число ${number}`)
})


// 2. Найти и вывести на экран максимальное число массива:
// let temp=0
// anyNumbers.forEach(function f(number,index){
//     if (temp<number){
//         temp=number
//     }
//     // console.log(temp)
// })
// console.log(temp)
//
//
// //3 найти наименьшее число
// anyNumbers.forEach(function f(number,index){
//     if (temp1>number){
//         temp1=number
//     }
// })
// console.log(temp1)


//4 Определить индекс максимального числа массива
// (или индексы, если число встречается более одного раза).
//
// Позиции (индексы) максимального числа в массиве: 6,7
let temp1=anyNumbers[0]
anyNumbers.forEach(function f(number,index){
    if (temp1<number){
        temp1=number
    }
})
// console.log(temp1)
// console.log(anyNumbers.indexOf(temp1));
let indexOfNumber=[]


for (let i = 0; i < anyNumbers.length; i++) {
    let index=anyNumbers.lastIndexOf(temp1);
    if (index!==-1){
        indexOfNumber.push(index)
        anyNumbers.splice(index,index+1)
    }

}
// console.log(indexOfNumber)
//Удалить повторяющиеся элементы массива

// const arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// const duplicates=arr.filter((number,index,numbers)=>{
//     console.log(number)
//     console.log(index)
//     console.log(numbers)
//     console.log(numbers.indexOf(number))
//     console.log(numbers.indexOf(number) !== index);
//     return numbers.indexOf(number) !==index
// })
//
// console.log(duplicates)



//Сумма элементов двух массивов
//[5,7,9,4,5]
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];
// const arr3=[]
// for (let i = 0; i < arr1.length; i++) {
//     console.log(i)
//     arr3.push(arr1[i]+(arr2[i]||0))
//
// }
// console.log(arr3)

// let lox=100
// function NikFun(lox){
//     if (lox>1){
//         return 'Красавчик'
//     }else {
//         return 'Не красавчик'
//
//     }
//
// }
//
// console.log(NikFun(-100));


module.exports = {customSplice, customSlice, customConcat, customFilter, customMap}
