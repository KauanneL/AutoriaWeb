var listaProdutos = [];

function gravarProduto() {
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

    listaProdutos.push(produto);
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