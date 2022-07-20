let subti = document.getElementById("subti");

let comp = prompt("¿Es usted mayor de edad (18 años)?");

if(comp === "si"){
    subti.innerText = "¡Hacé tu reserva!";
    let formulario1 = document.getElementById("formu");
    formulario1.addEventListener("submit", validarFormulario);
    function validarFormulario(e){
        if(formulario1 === null){
            e.preventDefault();
        }else{
            alert("Reserva enviada, ¡muchas gracias por elegirnos!")
        }
    }
}else{
    subti.innerText = "Las reservas deben ser realizadas por un mayor de edad.";
    let formulario2 = document.getElementById("formu");
    formulario2.remove();
}