function escreveConsole(){
    console.log('Viu a mensagem');
}

function exibeDados(){
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    document.getElementById('result').innerHTML = "Nome: "+ nome +" Senha: "+senha;
}

function verRadio(){
    var f1 = document.getElementById('f1').checked;
    if(f1){
        alert("Que bom que você é feliz!");
    }
    else if(document.getElementById('f2').checked){
        alert("Que pena que voce não é feliz");
    }
    else if(document.getElementById('f3').checked){
        alert("Você é feliz as vezes...");
    }
}

// versão com laço de repetição
function verRadio2(){
    var vetorRadio = document.getElementsByName('f'); // retorna um vetor de elementos

    for(i = 0; i < vetorRadio.length; i++){
        if(vetorRadio[i].checked){
            document.getElementById('feliz').innerHTML = "Feliz: "+ vetorRadio[i].value;
        }

    }
}

function verSelect(){
    let element = document.querySelector('#curso');
    let output = element.value;
    document.querySelector('.output').textContent = output;
}

function verCheckBox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "Estilos Musicais: ";
    for(i = 0; i < checkBoxes.length; i++){
        text = `${text} ${checkBoxes[i].value}, `;
    }
    document.getElementById('check').innerHTML = text;
}

