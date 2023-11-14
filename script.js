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
//Quetsion: 2 flags
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response;
    //console.log(data);
    var result=JSON.parse(data);
console.log(result[0].flags.png);
for(var i=0;i<result.length;i++){
       console.log(result[i].flags.png)
    }
    }
    //Question: 3 countries name
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data = request1.response;
    //console.log(data);
    var result1=JSON.parse(data);
    console.log(result1);
for(var i=0;i<result1.length;i++){
       console.log(result1[i].name.common)
    }
    }
    
    //Question: 3 regions
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload = function(){
    var data = request2.response;
    //console.log(data);
    var result2=JSON.parse(data);
    console.log(result2);
for(var i=0;i<result2.length;i++){
       console.log(result2[i].region)
    }
    }
//Question: 3 sub regions
var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload = function(){
    var data = request3.response;
    //console.log(data);
    var result3=JSON.parse(data);
    console.log(result3);
for(var i=0;i<result3.length;i++){
       console.log(result3[i].subregion)
    }
    }

//Question: 3 populations
var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload = function(){
    var data = request4.response;
    //console.log(data);
    var result4=JSON.parse(data);
    console.log(result4);
for(var i=0;i<result4.length;i++){
       console.log(result4[i].population)
    }
    }