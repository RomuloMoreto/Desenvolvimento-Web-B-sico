let i = 1;
function salvar(){
    let nome = document.querySelector('#n').value;
    nome = nome + ' ' + document.querySelector('#sn').value;
    let email = document.getElementById('e').value;
    let tabela = document.querySelector('.table');

    // Criar linha
    let linha = document.createElement('tr');

    // criar colunas
    let colId = document.createElement('td');
    let colNome = document.createElement('td');
    let colEmail = document.createElement('td');

    // Associa dados as colunas
    i++;
    colId.innerHTML = i;
    colNome.innerHTML = nome;
    colEmail.textContent = email;

    // Coloca coluna na linha
    linha.appendChild(colId);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);

    // Add linha na tabela
    tabela.appendChild(linha);

}