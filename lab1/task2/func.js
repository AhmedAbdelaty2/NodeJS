var fun = (name, bDate) => {
    var regx = new RegExp(/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi);
    year = bDate.split("-")
    if(!regx.test(bDate)){
        return "date should be something like 19-4-1975";
    }else if(year[2]>=2020){
        var today = new Date(bDate);
        return "invalid date";
    }else{
        var today = new Date();
        var age = today.getFullYear() - year[2];
        return "Hello, "+name+" your age now is: "+age;
    }
    
}

module.exports = fun;