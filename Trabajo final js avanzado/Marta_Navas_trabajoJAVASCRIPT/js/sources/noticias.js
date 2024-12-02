export function cargarNoticias() {
    //Carga json
    fetch('../../public/data/noticias.json')
        .then(response => {
            if (!response.ok) {
                console.error('Error al cargar el archivo JSON');
                return;
            }
            return response.json();
        })
        .then(data => {
            //Búsqueda del json (detectar si es un array para poder cargar su contenido)
            if (data.noticias && Array.isArray(data.noticias)) {
                mostrarNoticias(data.noticias);
            } else {
                console.error('El JSON no contiene un array en "noticias":', data);
            }
        })
        //Mostrar error si hay un fallo en la carga del json
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

//Mostrar noticias en el div para tal efecto
export function mostrarNoticias(data) {
    const noticiasContainer = document.getElementById('archivo-json');

    for (const noticia of data) {
        // Crear un nuevo elemento exclusivo para cada noticia
        const noticiaElement = document.createElement('div');
        noticiaElement.classList.add('noticia');

        // Rellenar el contenido del elemento con las noticias (ampliable)
        noticiaElement.innerHTML = `
            <h2>${noticia.title}</h2>
            <p><strong>Fecha:</strong> ${noticia.date}</p>
            <p>${noticia.description}</p>
            <p>${noticia.info}</p>
        `;

        // Añadir noticiaElement a noticiasContainer
        noticiasContainer.appendChild(noticiaElement);
    }
}