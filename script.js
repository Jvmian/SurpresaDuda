// Abrir overlay ao clicar na carta
document.getElementById('card').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
    atualizarTempo(); // Atualiza o tempo ao abrir o modal
});

// Fechar overlay ao clicar no botão de fechar
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// Fechar overlay ao clicar fora do modal
document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === document.getElementById('overlay')) {
        document.getElementById('overlay').style.display = 'none';
    }
});

// Lógica do carrossel
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length;

function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3500);

// Função para calcular e exibir o tempo desde 8 de junho de 2024
function atualizarTempo() {
    const dataInicial = new Date('2024-06-08');
    const dataAtual = new Date();
    const diferencaTempo = dataAtual - dataInicial;

    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    const horasPassadas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosPassados = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundosPassados = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

    const texto = `Faz ${diasPassados} dias, ${horasPassadas} horas, ${minutosPassados} minutos e ${segundosPassados} segundos que fiz minha melhor escolha!`;
    document.getElementById('tempo-texto').textContent = texto;
}

// Atualiza o tempo a cada segundo
setInterval(atualizarTempo, 1000);