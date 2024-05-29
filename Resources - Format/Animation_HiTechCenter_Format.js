/*document.addEventListener('DOMContentLoaded', function() {
    const contenido = document.querySelector('.contenido');
    contenido.classList.add('show');
});
*/

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos con la clase 'contenido'
    const contenidos = document.querySelectorAll('.contenido');

    // Agregar la clase 'show' con un retraso para cada elemento
    contenidos.forEach((contenido, index) => {
        setTimeout(() => {
            contenido.classList.add('show');
        }, index * 500); // Retraso de 500ms entre cada elemento
    });
});
