
const dotProduct = (num1, num2) => {
    let product = 0;
    for (let i = 0; i < num1.length; i++) {
        product += num1[i] * num2[i];
    }
    return product;
}

let num1 = [1, 2, 3, 4];
let num2 = [0, 2, 0, 4];

console.log(dotProduct(num1, num2));
