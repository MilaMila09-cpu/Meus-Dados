// Coletando dados via prompt
let nome = prompt("Digite seu nome:");
let rg = prompt("Digite seu RG:");
let cpf = prompt("Digite seu CPF:");
let idade = prompt("Por favor, Digite sua idade:");

// Exibindo os dados no HTML
document.getElementById("resultado").innerHTML = `
    <div class="dado"><span class="label">Nome:</span> ${nome}</div>
    <div class="dado"><span class="label">RG:</span> ${rg}</div>
    <div class="dado"><span class="label">CPF:</span> ${cpf}</div>
    <div class="dado"><span class="label">Idade:</span> ${idade} anos</div>
`;
