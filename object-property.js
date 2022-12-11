const students= [
    {id:21, name: "omar sunny"},
    {id:31, name: "manna"},
    {id:41, name: "moyuri"},
    {id:71, name: "deepjol"},
];
const names= students.map(s=> s.name);
const id= students.map(s=> s.id);
const old= students.filter(s=> s.id>40);
const oldOne= students.find(s=> s.id>40);


console.log(names);
console.log(id);
console.log(old);
console.log(oldOne);



