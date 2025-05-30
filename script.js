let comida = null;
let bebida = null;
let sobremesa = null;

function selecionarComida(elemento) {
    if (comida !== null) {
        comida.classList.remove("borda");
    }
    elemento.classList.add("borda");
    comida = elemento;
    verificarPedido();
}

function selecionarBebida(elemento) {
    if (bebida !== null) {
        bebida.classList.remove("borda");
    }
    elemento.classList.add("borda");
    bebida = elemento;
    verificarPedido();
}

function selecionarSobremesa(elemento) {
    if (sobremesa !== null) {
        sobremesa.classList.remove("borda");
    }
    elemento.classList.add("borda");
    sobremesa = elemento;
    verificarPedido();
}

function verificarPedido() {
    const botao = document.querySelector('button');
    
    if (comida !== null && bebida !== null && sobremesa !== null) {
        botao.disabled = false;
        botao.classList.remove("desabilitado");
        botao.classList.add("habilitado");
        botao.innerHTML = "Fechar pedido";
        botao.onclick = fecharPedido;
    } else {
        botao.disabled = true;
        botao.classList.remove("habilitado");
        botao.classList.add("desabilitado");
    }
}

function fecharPedido() {
    const detalhesPedido = document.querySelector("#detalhes-pedido");
    
    const precoComida = Number(comida.querySelector('p').innerHTML.replace('R$', '').replace(',', '.'));
    const precoBebida = Number(bebida.querySelector('p').innerHTML.replace('R$', '').replace(',', '.'));
    const precoSobremesa = Number(sobremesa.querySelector('p').innerHTML.replace('R$', '').replace(',', '.'));
    
    const total = precoComida + precoBebida + precoSobremesa;

    detalhesPedido.innerHTML = 
        `${obterDetalhes(comida)}<br>
         ${obterDetalhes(bebida)}<br>
         ${obterDetalhes(sobremesa)}<br>`;

    const totalPedido = document.querySelector("#total-pedido");
    totalPedido.innerHTML = `<strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong>`;

    document.querySelector("#informacao").classList.remove("escondido");
}

function obterDetalhes(item) {
    const nome = item.querySelector('h2').innerHTML; 
    const preco = item.querySelector('p').innerHTML.replace('R$', '');
    return `<div class="detalhe-item">${nome} - <strong class="detalhe-preco">R$ ${preco}</strong></div>`;
}

function confirmarPedido() {
    const phoneNumber = ""; // adicione seu número de telefone aqui!! 
    
    const precoComida = Number(comida.querySelector('p').innerHTML.replace('R$', '').replace(',', '.'));
    const precoBebida = Number(bebida.querySelector('p').innerHTML.replace('R$', '').replace(',', '.'));
    const precoSobremesa = Number(sobremesa.querySelector('p').innerHTML.replace('R$', '').replace(',', '.'));

    const total = precoComida + precoBebida + precoSobremesa;

    const pratoSelecionado = comida.querySelector('h2').innerHTML;
    const bebidaSelecionada = bebida.querySelector('h2').innerHTML;
    const sobremesaSelecionada = sobremesa.querySelector('h2').innerHTML;

    const mensagem = `Olá, gostaria de fazer o pedido:\n - Prato: ${pratoSelecionado}\n - Bebida: ${bebidaSelecionada}\n - Sobremesa: ${sobremesaSelecionada}\n Total: R$ ${total.toFixed(2).replace('.', ',')}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappLink, "_blank");
}

function cancelar() {
    document.querySelector("#informacao").classList.add("escondido");
}