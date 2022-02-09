/**
 * Task :
 * Write a Function To Discount from product price but discount depends on two premeters differ from type to another
 * if (food) =>  x1 = prdoduct index/(product index +100), x2 = prdoduct index/(product index +100)
 * if (Beverage) =>  x1 = prdoduct index/(product index +300), x2 = prdoduct index/(product index +400)
 * if (RawMaterial) =>  x1 = prdoduct index/(product index +400), x2 = prdoduct index/(product index +700)
 * Then Can Claculate discount by this equation => x1 * QuantityOfOrder + x2 * priceOfOrder (at x1 and x2 two par.)
 * 
 * Hint : Used Declarative Programming
 */

// Details Of Order but one object no class
const order = {
    id : 10,
    productIndex : 100,
    quntity : 20,
    unitPrice : 4
}

// object of string values and we can say map of <string , string>
const productType = {
    Food: 'Food',
    Beverage: 'Beverage',
    RawMateria:'RawMateria'
}

// if (food) 
const getTwoPremetersOfFood = (productIndex) =>{
    return {
        x1 : productIndex / (productIndex + 100),
        x2 : productIndex / (productIndex + 300)
    }
}

// if (beverage)
const getTwoPremetersOfBeverage = (productIndex) =>{
    return {
        x1 :productIndex / (productIndex + 300),
        x2 : productIndex / (productIndex + 400)
    }
}

// if (rawMatrial)
const getTwoPremetersOfRawMaterial = (productIndex) =>{
    return {
        x1 : productIndex / (productIndex + 400),
        x2 : productIndex / (productIndex + 700)
    }
}

// Main Function To Calculate Discount
const CalculateDiscount = (getTwoPremeters , order) => {
    return (getTwoPremeters(order.productIndex).x1 * order.quntity) + (getTwoPremeters(order.productIndex).x2 * order.quntity);
}

// Deligates of three functions
const A = getTwoPremetersOfFood;
const B = getTwoPremetersOfBeverage;
const C = getTwoPremetersOfRawMaterial;

// Testing
// 1
let product = productType.Food;
let getTwo = (product == productType.Food) ? A :(product == productType.Beverage) ? B : C;  
console.log(CalculateDiscount(getTwo,order));
// 2
product = productType.RawMateria;
getTwo = (product == productType.Food) ? A :(product == productType.Beverage) ? B : C;  
console.log(CalculateDiscount(getTwo,order));
// 3
product = productType.Beverage;
getTwo = (product == productType.Food) ? A :(product == productType.Beverage) ? B : C;  
console.log(CalculateDiscount(getTwo,order));
