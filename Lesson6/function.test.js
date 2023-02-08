const {customSplice, customSlice,customConcat} = require("./function");


const array = ["apple", "banana", "lemon", "lemon1", "lemon2", "lemon3"];
test('test customSplice', () => {
    expect(customSplice(array, 2, 2).length).toBe(4);
    expect(customSplice(array, 2, 2, "ban").length).toBe(5);
    expect(customSplice(array, 2, 2, "ban")).toEqual(["apple", "banana", "ban", "lemon2", "lemon3"]);


});

test('test customSlice', () => {
    expect(customSlice(array, 2, 2).length).toBe(0);
    expect(customSlice(array, 1, 4).length).toBe(3);
    expect(customSlice(array).length).toBe(6);
    expect(customSlice(array)).toEqual(["apple", "banana", "lemon", "lemon1", "lemon2", "lemon3"])
    expect(customSlice(array, 2, 5)).toEqual(["lemon", "lemon1", "lemon2"]);


});


test('test customConcat', () => {
    expect(customConcat(array,"Банан1", "Банан2").length).toBe(8);
    expect(customConcat(array,"Банан1", "Банан2",["Банан3","Банан4"]).length).toBe(10);
    expect(customConcat(array,"Банан1", "Банан2",["Банан3","Банан4"],["Банан5","Банан6"]).length).toBe(12);
    expect(customConcat(array,"Банан1", "Банан2",["Банан3","Банан4"],["Банан5","Банан6"])).toEqual(["apple", "banana", "lemon", "lemon1", "lemon2", "lemon3","Банан1", "Банан2","Банан3","Банан4","Банан5","Банан6"]);
});
