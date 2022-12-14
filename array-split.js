const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part= nums.slice(2, 5);
console.log(nums);
console.log(part);
const part2= nums.splice(2, 5);
console.log(nums);
console.log(part2);
const num2= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part3= num2.splice(2, 5, 55, 66, 77, 88, 99);
console.log(num2);
console.log(part3);
console.log(num2.join(""));
console.log(num2.join(" "));
console.log(num2.join(", "));


