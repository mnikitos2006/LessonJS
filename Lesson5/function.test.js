const {averageValue,unitConversion}=require("./function")


    test('test lesson5',()=>{
        expect(averageValue(4,10,15)).toBe(10);
        expect(averageValue(4,15,10)).toBe(10);
        expect(averageValue(10,4,15)).toBe(10);
        expect(averageValue(10,15,4)).toBe(10);
        expect(averageValue(15,10,4)).toBe(10);
        expect(averageValue(15,4,10)).toBe(10);
        expect(averageValue(4,4,4)).toBe(4);
        expect(averageValue(4,4,10)).toBe(4);
        expect(averageValue(4,10,4)).toBe(4);
        expect(averageValue(10,4,4)).toBe(4);
        expect(averageValue(undefined,undefined,4)).toBe("Error");
    });



test('test unitConversion',()=>{
   expect(unitConversion(1,"Гб")).toBe("1073741824 байт" );
   expect(unitConversion(1,"Кб")).toBe("1024 байт");
   expect(unitConversion(1,"Мб")).toBe("1048576 байт");
   expect(unitConversion(1,"Кг")).toBe("Error");


});
