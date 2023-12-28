let puntaje = 0;

iniciar = function(){
    console.log("Llamando a Iniciar");
    puntaje = 0;
    console.log("El valor ha sido cambiado");
};

cambiar = function(){
    puntaje = 5000;
};

mostrar = function(){
    alert('El puntaje es:' + puntaje);
};

incrementarUno = function(){
    puntaje = puntaje + 1;
};