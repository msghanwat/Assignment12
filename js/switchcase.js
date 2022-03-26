function myhotel(){
    menu=document.getElementById('food').value;
    switch(menu){
        case "1":
            document.getElementById('jevan').innerHTML='punjabi food';
            break;
            case "2":
                document.getElementById('jevan').innerHTML='marathi food';
                break;
                default:
                    document.getElementById('jevan').innerHTML='sorry we dont have enough food';
        
    }
}