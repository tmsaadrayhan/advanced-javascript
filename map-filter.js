const numbers= [1, 2, 3, 4, 5, 6, 7, 8];
const output= [];
for (let index = 0; index < numbers.length; index++) {
    output.push(numbers[index] * numbers[index]);
}
console.log(output);


const numbers2= [1, 2, 3, 4, 5, 6, 7, 8];
const output2= numbers2.map(element => element*element);
const output3= numbers2.filter(element => element>5);
const output4= numbers2.filter(element => element<5);
const output5= numbers2.find(element => element>5);

console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);

