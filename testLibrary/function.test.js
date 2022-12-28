const {sum, proizved} = require("./function");


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test("proizved 2 and 5 to be 10",()=>{
    expect(proizved(2,5)).toBe(10)
})