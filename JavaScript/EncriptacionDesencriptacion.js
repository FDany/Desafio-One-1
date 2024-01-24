
function visibilidad(){
    //DESHABILITO LA IMAGEN Y LOS TEXTOS
    document.getElementById('munieco').setAttribute('hidden','');
    document.getElementById('texto-vacio').setAttribute('hidden','');
    document.getElementById('mensaje').setAttribute('hidden','');
    // HABILITO EL MENSAJE Y EL BOTON
    document.getElementById('mensaje-encriptado').removeAttribute('hidden');
    document.getElementById('copiar').removeAttribute('hidden');
}

/********************* ENCRIPTACION *********************/

function caracteresCorrespondientes(letra){
    switch (letra){
        case 'a':
            return 'i';
        case 'e':
            return 'nter';
        case 'i':
            return 'mes';
        case 'o':
            return 'ber';
        case 'u':
            return 'fat';
    }
}

function modificarMensaje(valor){
    document.getElementById('mensaje-encriptado').value = valor;
}

function encriptar(){
    let mensaje = document.getElementById('caja-texto').value;

    let letrasAEncrip = ['a','e','i','o','u'];

    let mensajeEncript = '';

    for (let i=0; i<mensaje.length ; i++){
        
        mensajeEncript+=mensaje[i];

        if (letrasAEncrip.includes(mensaje[i])){
            mensajeEncript+=caracteresCorrespondientes(mensaje[i]);
        }
    }

    if (document.getElementById('mensaje-encriptado').value == ''){
        visibilidad();
    }
    modificarMensaje(mensajeEncript);

}





/********************* DESENCRIPTACION *********************/

function saltoIndice(letra){
    switch (letra){
        case 'a':
            return 1;
        case 'e':
            return 4;
        default:
            return 3;
    }
}

function desencriptar(){
    let mensaje = document.getElementById('caja-texto').value;

    let letrasADesencrip = ['a','e','i','o','u'];

    let mensajeDesencript = '';

    let indice = 0;

    while (indice<mensaje.length){
        
        mensajeDesencript+=mensaje[indice];

        if (letrasADesencrip.includes(mensaje[indice])){
            let salto = saltoIndice(mensaje[indice]);
            indice+= salto;
        }
        indice++;
    }

    if (document.getElementById('mensaje-encriptado').value == ''){
        visibilidad();
    }

    modificarMensaje(mensajeDesencript);
}

function copiar(){
    let contenido = document.getElementById('mensaje-encriptado').value;
    navigator.clipboard.writeText(contenido);
}