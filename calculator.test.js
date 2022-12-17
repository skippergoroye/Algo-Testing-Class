const Jest = require('jest');
const mathOperation = require('./calculator.js');


describe("Calculator test", ()=> {
    // 1. Equality
    it("Adding numbers together", ()=> {
        // Arrange and Act
        const result = mathOperation.sum(1,2)

        //Assert
        expect(result).toBe(3)
    })




    test("Subtracting two numbers", ()=> {
        // Arrange and act
        const result = mathOperation.diff(6,7)


        // Assert
        expect(result).not.toBe(22)
        // expect(result).not.toBe(-1)
    })





    // Truthiness
    test("truthy operator", ()=> {
        const name = "Software Engineering is soft money"
        const n = null
        expect(n).toBeNull() 
        expect(name).not.toBeNull()  


        // namehas a valid value
        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
    })
    




    //3. Number
    test("numeric operators", ()=> {
        const num1 = 100;
        const num2 = -20;
        const num3 = 0;

        
        //greater than
        expect(num1).toBeGreaterThan(10)

        expect(num2).toBeLessThanOrEqual(0)

        expect(num3).toBeGreaterThanOrEqual(0)
    })



    // 4. String
    it("string matchers", ()=>{
        const string1 = "Software engineering is soft money"


        // Successful
        expect(string1).toMatch(/soft/)


        // failure
        // expect(string1).toMatch(/abc/)
    })






     // 5. Array
     it("Array matchers", ()=>{
        const string1 = ["cart"]

        expect(string1).toBeInstanceOf(Array)
        expect(string1).toContain("cart")
    })
})


