
function calculateVAT( price ) {
    if(typeof price==='string' || price<0){
        return "Invalid";
    }
    else{
        return  price *(7.5/100);
    }
}



