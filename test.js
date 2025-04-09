//Currying / function curry

// Noremal
// const add = (a, b) => a + b;

//curry
// const add = (a) => (b) => a +b

function add(a){
    return  function (b) {
        return a + b
    }
}

// const totalAmount = (amount, discount) => amount - amount * discount;
const totalAmount = (discount) => (amount) => amount - amount * discount;
const withDiscount = totalAmount(0.3);


console.log(add(3)(3));
console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(230));