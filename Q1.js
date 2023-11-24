//For the given Json iterate over all for loops:-
var obj =  new XMLHttpRequest();
obj.open("GET","https://restcountries.com/v3.1/all");
obj.send();

//For-in loop:-
obj.onload = function(){
    var result = JSON.parse(obj.response);
    for(key in result){
        console.log(result[key]);
    }
}

//For loop:-
obj.onload = function(){
    var result = JSON.parse(obj.response);
    for(var i=0; i < result.length() ; i++){
        console.log(result[i]);
    }
}

//Foreach:-
obj.onload = function(){
    var result = JSON.parse(obj.response);
    result.forEach(key => {
        console.log(key, result[key]);
    }); 
}
