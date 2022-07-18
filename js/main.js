let s1 = 'Uwielbiam JavaScript';
let s2 = 'jestem świetnym programistą';

console.log(longer_string(s1, s2));


function longer_string(str1, str2){
    let l1 = str1.length;
    let l2 = str2.length;
    let longer = '';
    if(l1 >= l2){
        longer = str1;
    }else{
        longer = str2;
    }
    return longer;
}