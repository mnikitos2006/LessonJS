//Задача1
// let a=1
// let b=a*60*60
// console.log(b)

function getSeconds(hours){
  if (!hours||hours<0){
      return 0
  }
    return hours*60*60

}
//Задача6
// let age="16"
// console.log("Мне "+age+" лет")
function age(age){
    return "Мне " + age + "лет"
}

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

function sekh(hours){
    return hours*60*60
}
function sekd(hours){
    return hours*60*60*24
}
function sekw(hours){
    return hours*60*60*24*31
}

//Задача8
// let hour = "10"
// let minute = "10"
// let seconds = "10"
// console.log(hour+":"+minute+":"+seconds)
function vremya(hour,minute,seconds){
    return hour+":"+minute+":"+seconds
}


//Задача5
// let name="Никита!"
// console.log("Привет,"+name)
function name(name){
    return "Привет," + name;
}



//Задача4
// var str1='Привет,'
// var str2='Мир!.'
// console.log(str1+str2)

function strgg(str1, str2){
    return str1 + str2;
}

//Задача2
// let a=10
// let b=2
// let c
// console.log(c=a*b)
// console.log(c=a+b)
// console.log(c=a-b)
// console.log(c=a/b)

function sum(a, b) {
    return a + b;
}
function proizved(a, b) {
    return a * b;
}
function minus(a,b){
    return a-b
}
function delenie(a,b){
    if(b===0){
        return "Ошибка"
    }
    return a/b
}
module.exports = {sum,proizved,minus,delenie,getSeconds,strgg,name,age,sekh,sekd,sekw,vremya};









