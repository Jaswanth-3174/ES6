function interation(){
    for(var a = 0; a < 5; a++){
        console.log(a); 
    }
    console.log(a); // 5 will be printed, not an error -> which has function scope.

    for(let b = 0; b < 5; b++){
        console.log(b); 
    }
    console.log(b); // error as it is blocked scoped
}

interation();