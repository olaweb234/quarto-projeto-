function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt( document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarpista(quantidade);
    }else if(tipo.value=='inferior'){
        comprarinferior(quantidade);
    }else{
        comprasuperior(quantidade);
    }
}
//funções:
function comprarpista(quantidade){
    let quantidadepista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade>quantidadepista){
        alert('Quantidade insuficente para pista');

    } else{
        quantidadepista = quantidadepista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadepista;
        alert('Compra realizada');
    }
     

}
function comprasuperior(quantidade){
    let quantidadesuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade>quantidadesuperior){
        alert('Quantidade insuficente para cadeira superior');

    } else{
        quantidadesuperior = quantidadesuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadesuperior;
        alert('Compra realizada');
    }
     

}

function comprarinferior(quantidade){
    let quantidadeinferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade>quantidadeinferior){
        alert('Quantidade insuficente para cadeira inferior');
    }else{
        quantidadeinferior = quantidadeinferior-quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeinferior;
        alert('Compra realizada');
    }
    
    
}
