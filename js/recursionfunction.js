count=0;
function mine(){
count++;
    document.write("<br>"+count);
    if (count<=10){
    mine();
    }
}
mine();
