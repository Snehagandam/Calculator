 function AC(){
       document.getElementById("res").value="";
 }


function Show(input){
    document.getElementById("res").value+=input;

}

function cal(){
    var output=eval(document.getElementById("res").value)
    document.getElementById("res").value=output

}