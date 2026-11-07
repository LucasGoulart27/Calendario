const mes = document.getElementById("Mes");
const semanas = document.getElementById("semana");
const dias = document.getElementById("dia");

const anterior = document.getElementById("Anterior");
const proximo = document.getElementById("Proximo");

// Data atual
const dataAtual = new Date();

const nomeMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const nomesDias = [
    "Dom", 
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
];

// Atualizar o calendário
function atualizarCalendario() {
    const ano = dataAtual.getFullYear();
    const numeroMes = dataAtual.getMonth();

    // Atualiza o titulo d mês
    mes.textContent = `${nomeMeses[numeroMes]} ${ano}`

    // Limpa os elementos anteriores
    semanas.innerHTML = "";
    dias.innerHTML = "";

    // Exiba os dias da semana
    nomesDias.forEach(dia => {
        const span = document.createElement("span");
        span.textContent = dia
        semanas.appendChild(span);
    });

    // Primeiro dia
    const primeiroDia = new Date(ano, numeroMes, 1).getDay();

    // Quantidade de dias e mês
    const quantidadeDias = new Date(ano, numeroMes + 1, 0).getDate();

    // Espaços vazios antes do primeiro dia
    for(let i = 0; i < primeiroDia; i++) {
        const vazio = document.createElement("span");
        vazio.classList.add("vazio");
        dias.appendChild(vazio);
    }

    // Criar os dias do mês
    for(let dia = 1; dia <= quantidadeDias; dia++) {
        const elementosDia = document.createElement("span");
        elementosDia.textContent = dia

        // Destaca o dia atual
        if(dia === new Date().getDate() && numeroMes === new Date().getMonth() && ano === new Date().getFullYear()) {
            elementosDia.classList.add("hoje");
        }
        dias.appendChild(elementosDia)
    }
}

// Voltar um mês
anterior.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    atualizarCalendario();
});

// Proximo mês
proximo.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    atualizarCalendario();
});

// Inicializa o calendário
atualizarCalendario();