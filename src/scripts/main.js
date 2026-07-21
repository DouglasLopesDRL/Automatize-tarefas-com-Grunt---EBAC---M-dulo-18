// Array global para guardar o histórico de sorteados
let listaNumeros = [];

document.addEventListener('DOMContentLoaded', function() {

    // OUVINTE 1: Monitora alterações no campo input
    document.getElementById('numero-maximo').addEventListener('input', function() {
    // 1. Reseta o array de números
    listaNumeros = [];
    
    // 2. Esconde/limpa a área de resultado para não exibir dados antigos
    document.querySelector('.resultado').style.display = 'none';
    document.getElementById('numero-sorteado').innerText = "";
    document.getElementById('texto-sorteado').innerText = "";
    
    console.log("Número máximo alterado. Sorteio reiniciado!");
    });

    // OUVINTE 2: Submissão do formulário (Sorteio)
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        // 1. Captura e converte o número máximo do input
        const numMaximo = parseInt(document.getElementById('numero-maximo').value);

        // 2. Gera um número aleatório inicial
        let numAleatorio = Math.floor(Math.random() * numMaximo) + 1;

        // 3. Verifica se a lista já preencheu todas as possibilidades
        if (listaNumeros.length >= numMaximo) {
            document.getElementById('texto-sorteado').innerText = "Todos os possíveis números referentes ao número digitado já foram sorteados. O sorteio será reiniciado!";
            document.getElementById('numero-sorteado').innerText = "";
            document.querySelector('.resultado').style.display = 'flex';
            listaNumeros = []; // Reseta o array
        } else{
            // 4. LOOP DO...WHILE + INCLUDES: Gera um novo número enquanto o sorteado já existir no array
            while (listaNumeros.includes(numAleatorio)) {
                numAleatorio = Math.floor(Math.random() * numMaximo) + 1;
            }
            // 5. PUSH: Adiciona o número único validado na lista
            listaNumeros.push(numAleatorio);
            // 6. Atualiza a interface (DOM)
            document.getElementById('texto-sorteado').innerText = "Número sorteado: ";
            document.querySelector('.resultado').style.display = 'flex';
            document.getElementById('numero-sorteado').innerText = numAleatorio;
        }
        

        console.log("Histórico atual:", listaNumeros);
    });
    
});

