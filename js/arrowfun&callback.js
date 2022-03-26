//ans=(3,4) => return 3*4;
function printinhtmlpage(data){
    document.getElementById('op').innerHTML=data;

}


function calculator(num1,num2,mycallback){
    mult=num1*num2;
    mycallback(multi);
    
}
calculator(7,8,printinhtmlpage);
    
