function toggleMenu() {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');
    
    nav.classList.toggle('active');
    
    menuIcon.classList.toggle('hidden');
}

/*
insertion

const fruits = [`banana`, `saging`, `lansunis`]
fruits.push(`mangga`);
console.log(fruits);
*/

/*deletion

it's important to note that the pop() method always removes the last element of the array.

const num = [`1`, `2`, `3`]
num.pop();
console.log(num);
*/

/*

array.splice(start, deleteCount,)

const num = [`1`, `2`, `3`, `4`]
num.splice(2,1);
console.log(num);
*/

/*
let num = [1, 2, 3, 4, 5, 6]
let index = num.indexOf(2);
console.log(index);
*/
