const {getSeconds, sum, proizved, minus, delenie,f16} = require("./functions");


test('result getSeconds should be 3600', () => {
    expect(getSeconds(1)).toBe(3600);
    expect(getSeconds(-1)).toBe(0);
    expect(getSeconds(0)).toBe(0);
    expect(getSeconds(undefined)).toBe(0);
    expect(getSeconds(null)).toBe(0);
});


test('result sum', () => {
    expect(sum(1,5)).toBe(6)
    expect(sum(0,2)).toBe(2)
    expect(sum(-1,-8)).toBe(-9)
})

test('result proizved',()=>{
    expect(proizved(5,5)).toBe(25)
    expect(proizved(0,10)).toBe(0)
    expect(proizved(0,-10)).toBe(-0)
    expect(proizved(5,-5)).toBe(-25)

})

test('result minus',()=>{
    expect(minus(5,2)).toBe(3)
    expect(minus(0,2)).toBe(-2)
    expect(minus(-2,-2)).toBe(0)
    expect(minus(0,0)).toBe(0)
})

test('result delenie',()=>{
    expect(delenie(5,5)).toBe(1)
    expect(delenie(0,0)).toBe("Ошибка")
    expect(delenie(0,5)).toBe(0)
    expect(delenie(5,0)).toBe("Ошибка")

})
