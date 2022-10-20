const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";  // data format//

xhr.onload =  function displayResult(){
const RestCountries = xhr.response;

for(var i = 0;i<=RestCountries.length-1;i++){
    console.log(i + 1, RestCountries[i].name.common);
    console.log(RestCountries[i].flags.png);
    console.log(RestCountries[i].population);
    console.log(RestCountries[i].region);
    console.log(RestCountries[i].subregion);
    console.log(" ");

}
return RestCountries;

}
