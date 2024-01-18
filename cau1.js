function reverse(n) {
    n = n.toString(); 
    return n.split("").reverse().join(""); 
}
function symmetrical(n) {
    let flag = 0; 
    if (reverse_num(n) == n) flag = 1; 
    return flag;
}
let n = prompt(" Nhap so tu nhien ");
let check = symmetrical(n);
if (check == 1){
    console.log(`${n} la so doi xung`);
}else{
    console.log(`${n} khong la so doi xung`);
}