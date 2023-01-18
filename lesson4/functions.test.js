const {example3, example7,example8,example9,getMaxOrMinValue} = require("./functions");
const {MESSAGE_TO_STRING,MESSAGE_TO_NUMBER} = require("./constants");
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
test('test getMaxOrMinValue',()=>{
    expect(getMaxOrMinValue(2,4,"<")).toBe(2);
    expect(getMaxOrMinValue(4,2,"<")).toBe(2);
    expect(getMaxOrMinValue(2,2,"<")).toBe(MESSAGE_TO_NUMBER);
    expect(getMaxOrMinValue(2,4,">")).toBe(4);
    expect(getMaxOrMinValue(4,2,">")).toBe(4);
    expect(getMaxOrMinValue(2,2,">")).toBe(MESSAGE_TO_NUMBER);
    expect(getMaxOrMinValue(2,undefined,">")).toBe("Error");
    expect(getMaxOrMinValue(2,2,undefined)).toBe("Отсутствует знак");

    expect(getMaxOrMinValue("Kit","Kot","<")).toBe("Kit");
    expect(getMaxOrMinValue("Kot","Kit","<")).toBe("Kit");
    expect(getMaxOrMinValue("Kit","Kit","<")).toBe(MESSAGE_TO_STRING);
    expect(getMaxOrMinValue("Kit","Kot",">")).toBe("Kot");
    expect(getMaxOrMinValue("Kot","Kit",">")).toBe("Kot");
    expect(getMaxOrMinValue("Kit","Kit",">")).toBe(MESSAGE_TO_STRING);
    expect(getMaxOrMinValue("Kit",undefined,">")).toBe("Error");
    expect(getMaxOrMinValue("Kit","Kot",undefined)).toBe("Отсутствует знак");
});