// Qustion:1
let obj1 ={name:"Person 1",age:5};
let obj2 ={age:5, name:"person 1"};
let json1=JSON.stringify(obj1);
let json2=JSON.stringify(obj2);
if(json1===json2){
    console.log("both are equal");
}
else{
    console.log("both are not equal");
}