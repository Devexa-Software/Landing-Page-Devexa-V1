  
  // Para el efecto de borde al hacer click en los enlaces de navegación en el index.html
  document.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('nav-link')) {
        
        
        const idSeccion = event.target.getAttribute('href').replace('#', '');
        const seccion = document.getElementById(idSeccion);

  
        if (seccion) {
            seccion.style.transition = 'border 0.3s ease-in-out';
            seccion.style.border = '2px solid white';

          
            setTimeout(() => {
                seccion.style.border = '2px solid transparent'; 
               
            }, 1000);
        }
    } 
});


//para copiar el numero de contacto al portapapeles en el contacto.html
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