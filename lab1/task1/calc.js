function add(a,b){
    if(isNaN(a) || isNaN(b)){
        return "invalid entery";
    }else{
        return a+b
    }
}

function sub(a,b){
    if(isNaN(a) || isNaN(b)){
        return "invalid entery";
    }else{
        return a-b
    }
}

function multi(a,b){
    if(isNaN(a) || isNaN(b)){
        return "invalid entery";
    }else{
        return a*b
    }
}

module.exports={
    add: add,
    sub: sub,
    mul: multi
}