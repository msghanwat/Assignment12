function myresult(){
    mark=document.getElementById('mark').value;
    if(mark>90 && mark<100){
        document.getElementById('ans').innerHTML='you get A+ grade..your marks are'+mark;
    }
    else if(mark>80)
    {
        document.getElementById('ans').innerHTML='you get A grade..your marks are'+mark;
    }
    else if(mark>70){
        document.getElementById('ans').innerHTML='you get B+ grade..your marks are'+mark;
    }
    else if(mark>60){
        document.getElementById('ans').innerHTML='you get B grade...your marks are'+mark;
    }
    else if(mark>50){
        document.getElementById('ans').innerHTML='you get c grade..your marks are'+mark;
    }
    else if(mark>40){
        document.getElementById('ans').innerHTML='you get D grade..your marks are'+mark;
    }
    else{
        document.getElementById('ans').innerHTML='you are failed';
    }
    

    

    
    
}