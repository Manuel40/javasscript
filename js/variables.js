


function tres(nombre="debes de tener un nombre"){
    var nombre;
    nombreactual=nombre;
    return document.write(nombre);
}





function cuatro(nombre, apellido){
    if(nombre!=null && apellido != null)
    {
        var respuesta = document.write("bien tus datos pueden ser enviados");
        return respuesta;
    }else
    {
        var respuesta = document.write("Ningun dato puede sr nullo ni tu nombre ni apelido");
        return respuesta;
    }
}

function cinco(...meses){
    for(let uno of meses){
     document.write(uno+" ");
    }
    
};
cinco("Enero","Febrero","Marzo", "Abril","Mayo");


function seis(nombre,precio,peso){
 return nombre+precio+peso;

}

var primero =['soldado',25,2];

document.write(seis(...primero));

var siete = function(){
    resultado = "hola buenas tardes";
    return resultado;
};


document.write(siete());
//========================================================================

var a = function(nombre,uno){
    var e= nombre;
    uno(e);
}

var b = function(i){
 document.write(i);
}

a("Manuel" ,b);