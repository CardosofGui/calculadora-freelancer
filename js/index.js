function descricao(desc){

    if(desc == 0){
        document.getElementById("titulo-descricao").innerHTML = "Tempo diário investido no projeto";
        document.getElementById("texto-descricao").innerHTML = "Agora vamos entender um pouco mais sobre esses fatores começando pelo fator tempo diário investido. Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.";
    }else if(desc == 1){
        document.getElementById("titulo-descricao").innerHTML = "Dias efetivos trabalhando";
        document.getElementById("texto-descricao").innerHTML = "Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.";
    }else if(desc == 2){
        document.getElementById("titulo-descricao").innerHTML = "Tempo diário investido no projeto";
        document.getElementById("texto-descricao").innerHTML = 'Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.';
    }else if(desc == 3){
        document.getElementById("titulo-descricao").innerHTML = "Valor total do Projeto";
        document.getElementById("texto-descricao").innerHTML = "Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.";
    }
}

function calcular(){

    function calculo(evento){
        evento.preventDefault();
    }

    let form = document.querySelector("#calculo-freelancer");
    let valorProjeto = document.getElementById("txtProjeto").value;
    let diasEfetivos = document.getElementById("txtEfetivo").value;
    let horasDiarias = document.getElementById("txtInvestido").value;
    let diasFerias = document.getElementById("txtFerias").value;

    let calculoProjeto = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );

    document.getElementById("valor-projeto").innerHTML = `Valor por hora é: R$ ${calculoProjeto.toFixed(2)}`;

    form.addEventListener('submit', calculo);
}