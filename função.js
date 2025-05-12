var listaProdutos = [];
var emAlteracao = false;

function gravarProduto(event) {
    event.prevetDefault();
    let nomeProduto = document.getElementById('nomeProduto').value;
    let qtdEstoque = document.getElementById('qtdEstoque').value;
    let valorUnitario = document.getElementById('valorUnitario').value;
    let fornecedor = document.getElementById('fornecedor').value;

    let produto = {
        nomeProduto: nomeProduto,
        qtdEstoque: qtdEstoque,
        valorUnitario: valorUnitario,
        fornecedor: fornecedor
    }

    if (emAlteracao) {
        listaProdutos[indiceElementoAlteracao] = produto;
    }
    else{
        listaProdutos.push(produto);
    }
    
    limpar();
    listarProdutos();
}

function listarProdutos() {
    let conteudo = '';
    if (listaProdutos.length === 0) {
        conteudo = '<tr><td colspan="7">Nenhum produto cadastrado até o momento</td></tr>';
    } else {
        listaProdutos.forEach((produto, indice) => {
            conteudo += `
                <tr>
                    <td>${indice}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.qtdEstoque}</td>
                    <td>${produto.valorUnitario}</td>
                    <td>${produto.fornecedor}</td>
                    <td><button type"button">Alterar</button></td>
                    <td><button type"button" onclick="excluir(${indice})">Excluir</button></td>
                </tr>
            `;
        });
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}

function excluir(indice) {
    if (confirm('Deseja realmente excluir esse produto?')) {
        listaProdutos.splice(indice, 1);
        listarProdutos();
    }

}

function alterar(indice) {
    emAlteracao = true;
    indiceElementoAlteracao = indice;
    document.getElementById('nomeProduto').value = listaProdutos[indice].nomeProduto;
    document.getElementById('qtdEstoque').value = listaProdutos[indice].qtdEstoque;
    document.getElementById('valorUnitario').value = listaProdutos[indice].valorUnitario;
    document.getElementById('fornecedor').value = listaProdutos[indice].fornecedor;
}

function limpar() {
    document.getElementById('meu form').reset();
    emAlteração = false;
}