document.getElementById("application").addEventListener("click", alert_box);

function alert_box(){

    const query = 'input[name="movie"]:checked';
    const selectedElements = document.querySelectorAll(query);

    const selectedAmount = selectedElements.length;

    if (selectedAmount === 0){
        alert("어... 그래도 친구해주세요")
    }
    else{
        alert("저랑 취향이 " + selectedAmount + "개나 일치하시네여");
    }

}

function logScripter(){
        console.log( document.forms[0] );
        console.log( document.forms[0].elements[0] );
        console.log( document.forms[0].elements[1] );

}
