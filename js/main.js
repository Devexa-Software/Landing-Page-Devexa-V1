  document.addEventListener('click', (event) => {
    // 1. Verificamos si es un link de navegación
    if (event.target.classList.contains('nav-link')) {
        
        // 2. Obtenemos el ID del href (quitándole el #)
        const idSeccion = event.target.getAttribute('href').replace('#', '');
        const seccion = document.getElementById(idSeccion);

        // 3. Si la sección existe, aplicamos el efecto
        if (seccion) {
            seccion.style.transition = 'border 0.3s ease-in-out';
            seccion.style.border = '2px solid white';

            // 4. Quitamos el borde después de 1 segundo
            setTimeout(() => {
                seccion.style.border = '2px solid transparent'; 
                // Usamos transparent en lugar de 'none' para que la caja no "brinque"
            }, 1000);
        }
    } 
});


// Para la parte de contacto
const btnCopiar = document.getElementById('btn_copiar');
const numero = document.getElementById('numero_copy').innerText;

btnCopiar.addEventListener('click', () => {

    navigator.clipboard.writeText(numero).then(() => {
      
        const textoOriginal = btnCopiar.innerText;
        btnCopiar.innerText = '¡Copiado!';
        btnCopiar.style.backgroundColor = '#25d366';

        setTimeout(() => {
            btnCopiar.innerText = textoOriginal;
            btnCopiar.style.backgroundColor = ''; 
        }, 1000);
    });
});