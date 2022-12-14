const num= [1, 2, 3, 4, -5, 6, -7, -8, 9]
for (let index = 0; index < num.length; index++) {
    if(num[index]>3){
        break;
    }
    console.log(num[index]);
}
for (let index = 0; index < num.length; index++) {
    if(num[index]<0){
        continue;
    }
    console.log(num[index]);
}
if("0"){
    console.log(100);
}
