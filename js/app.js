document.getElementById('lista-produtos').innerHTML = 'Seu carrinho está vazio.';
document.getElementById('valor-total').innerHTML = 'R$0';

let compras = { 'fone': 0, 'celular': 0, 'vr': 0 };
let totalCompras = { 'fone': compras['fone'] * 100, 'celular': compras['celular'] * 1400, 'vr': compras['vr'] * 5000 };
let totalCarrinho = 0;

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorProduto = parseFloat(produtoSelecionado.split('R$')[1]);
    let qtdProduto = parseInt(document.getElementById('quantidade').value);
    let valorAdicionado = qtdProduto * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    let qtdFone = parseInt(compras.fone);
    let qtdCelular = parseInt(compras.celular);
    let qtdVr = parseInt(compras.vr);

    if (qtdProduto != 0 && qtdProduto != '') {
        if (produtoSelecionado.includes('Celular')) {
            compras.celular += qtdProduto;
            qtdCelular = parseInt(compras.celular);
            atualizarQuantidades(qtdFone, qtdCelular, qtdVr);
        } else if (produtoSelecionado.includes('Fone')) {
            compras.fone += qtdProduto;
            qtdFone = parseInt(compras.fone);
            atualizarQuantidades(qtdFone, qtdCelular, qtdVr);
        } else {
            compras.vr += qtdProduto;
            qtdVr = parseInt(compras.vr);
            atualizarQuantidades(qtdFone, qtdCelular, qtdVr);
        }

        carrinho.innerHTML = '';
        for (let i in compras) {
            if (compras[i] != 0) {
                carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${compras[i]}x</span> ${i} <span class="texto-azul">R$${totalCompras[i]}</span>
  </section>`
            }
        }
    } else {
        alert('A quantidade de itens adicionados ao carrinho é inválida!');
    }

    totalCarrinho += valorAdicionado;

    document.getElementById('valor-total').innerHTML = `R$${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;

}

function atualizarQuantidades(a, b, c) {
    compras = { 'fone': parseInt(a), 'celular': parseInt(b), 'vr': parseInt(c) };
    totalCompras = { 'fone': compras['fone'] * 100, 'celular': compras['celular'] * 1400, 'vr': compras['vr'] * 5000 };
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = 'Seu carrinho está vazio.';
    document.getElementById('valor-total').innerHTML = 'R$0';
    compras = { 'fone': 0, 'celular': 0, 'vr': 0 };
}