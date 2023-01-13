const {example3, example7,example8,example9} = require("./functions");
test('test lesson', () => {
    expect(example3(3)).toBe(6);
    expect(example3("Строка")).toBe("Введённое значение не корректно");
    expect(example3(null)).toBe("Введённое значение не корректно");
    expect(example3([])).toBe("Введённое значение не корректно");
    expect(example3()).toBe("Введённое значение не корректно");

});
test('test example7',()=>{
    expect(example7(10,"10")).toBe(true);
    expect(example7(1,true)).toBe(true);
    expect(example7(0,false)).toBe(true);
    expect(example7(1,Boolean([]))).toBe(true);

});
test('test example8',()=>{
    expect(example8(10,"10")).toBe(false);
    expect(example8(1,true)).toBe(false);
    expect(example8(0,false)).toBe(false);
    expect(example8(1,Boolean([]))).toBe(false);

});


test('test example9',()=>{
    expect(example9(3,4)).toBe(true);
    expect(example9(4,4)).toBe(false);
    expect(example9("4","5")).toBe(true);
    expect(example9("kit","kot")).toBe(true);
    expect(example9("kit","ko")).toBe(true);


});