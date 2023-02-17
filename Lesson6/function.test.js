const {customSplice, customSlice, customConcat, customFilter,customMap} = require("./function");


const array = ["apple", "banana", "lemon", "lemon1", "lemon2", "lemon3"];
const users = [
    {
        id: 1,
        name: "Nikita",
        age: 19,
        gender: "male"
    },
    {
        id: 2,
        name: "Ivan",
        age: 18,
        gender: "male"
    },
    {
        id: 3,
        name: "Ilya",
        age: 25,
        gender: "female"
    },
    {
        id: 4,
        name: "Vasya",
        age: 29,
        gender: "female"
    },
    {
        id: 5,
        name: "Dima",
        age: 24,
        gender: "male"
    }
]
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
    expect(customConcat(array, "Банан1", "Банан2").length).toBe(8);
    expect(customConcat(array, "Банан1", "Банан2", ["Банан3", "Банан4"]).length).toBe(10);
    expect(customConcat(array, "Банан1", "Банан2", ["Банан3", "Банан4"], ["Банан5", "Банан6"]).length).toBe(12);
    expect(customConcat(array, "Банан1", "Банан2", ["Банан3", "Банан4"], ["Банан5", "Банан6"])).toEqual(["apple", "banana", "lemon", "lemon1", "lemon2", "lemon3", "Банан1", "Банан2", "Банан3", "Банан4", "Банан5", "Банан6"]);
});
test('test customFilter', () => {
    expect(customFilter(users, (user) => user.gender === "male").length).toBe(3);
    expect(customFilter(users, (user) => {
        return user.age > 20
    }).length).toBe(3);
    expect(customFilter(users, function (user) {
        if (user.age < 20) {
            return true
        } else {
            return false
        }

    }).length).toBe(2);
    expect(customFilter(users, function (user) {
        return user.gender === "female"
    }).length).toBe(2);

});



test('test customMap', () => {
    expect(customMap(users, (user) => user).length).toBe(5);
    expect(customMap(users, (user) => user)[0].name).toBe("Nikita");
    expect(customMap(users, function (user){
        return {...user,name:user.name+"!"}
    })[0].name).toBe("Nikita!");
    expect(customMap(users, function (user){
        return {...user,address:"newAddress"}
    })[0].address).toBe("newAddress");
});



