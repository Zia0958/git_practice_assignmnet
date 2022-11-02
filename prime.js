
function checkPrime(number){
factor=0;

for(i=1;i<=num;i++){

if(num%i==0){
factor++
}
}
if(factor==2){
return true;

}
return false;
}



answer=checkPrime(13);
if(answer=true){
console.log("Prime Number");
}else{
console.log("Not a Prime Number");
}
