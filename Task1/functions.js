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
module.exports = {sum,proizved,minus,delenie,getSeconds};