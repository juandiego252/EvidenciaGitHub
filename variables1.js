let puntaje = 0;
puntaje = 0;

iniciar = function(){
    puntaje = 0;
};

cambiar = function(){
    puntaje = 1000;
    alert(puntaje);
};

mostrar = function(){
    alert('El puntaje es: ' + puntaje);
};

incrementarUno = function(){
    puntaje+=1;
}

decrementarUno = function(){
    puntaje-=1;
};

incrementarDiez = function(){
    puntaje +=10;
};

decremetarDiez = function (){
    puntaje -=10;
};