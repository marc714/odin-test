import { reverseString } from "./combined";
import { calculator } from "./combined";
import { caesarCipher } from "./combined";
import { analyzeArray } from "./combined";


// reverseString
test("reversing a string", ()=> {
    expect(
        reverseString("game")
    ).toBe("emag")
})

// calc
test("calculator", ()=> {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.subtract(1,2)).toBe(-1)
    expect(calculator.divide(4,2)).toBe(2)
    expect(calculator.multiply(2,5)).toBe(10)
})

// caesarCipher
test("shifting numbers", ()=> {
    expect(
        caesarCipher("abc", 1)
        ).toEqual([1, 2, 3])
    
    expect(
        caesarCipher("abc", 28)
        ).toEqual([28, 0, 1])
})

// anal array
test("analyze array", ()=> {
    const myArr = [1, 2, 3, 4, 5]
    expect(
        analyzeArray(myArr)
    ).toEqual({"average":3, "min":1, "max": 5, "length": 5})
})