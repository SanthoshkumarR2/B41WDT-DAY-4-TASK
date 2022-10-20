var obj1 = {name:"Santhosh",age:20};
var obj2 = {age:20,name:"Santhosh"};

if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log("true");
}else{
    console.log("false");
};