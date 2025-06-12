function Soma(){
    let numero_um = parseInt(document.getElementById('Primeiro_Numero').value);
    let numero_dois = parseInt(document.getElementById('Segundo_Numero').value);

    let soma_numero = numero_um + numero_dois;
    
    document.getElementById('Resultado').textContent = 'Resultado: ' + soma_numero;
}
function Subtrair(){
    let numero_um = parseInt(document.getElementById('Primeiro_Numero').value);
    let numero_dois = parseInt(document.getElementById('Segundo_Numero').value);

    let subtrair_numero = numero_um - numero_dois;
    
    document.getElementById('Resultado').textContent = 'Resultado: ' + subtrair_numero;
}
