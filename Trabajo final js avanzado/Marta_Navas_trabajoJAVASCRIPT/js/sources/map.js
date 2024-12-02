window.addEventListener('DOMContentLoaded', function mapa(){
    //Objeto opciones
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximunAge: 0
    }

    //Buscar geolocalización (para manejar los posibles outcomes)
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            success,
            error,
            options
        )  
    }else{
        alert('¡Vaya! No podemos geolocalizar tu posición');
    }

    //Éxito en la geolocalización
    function success(position){
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        console.log(`Ubicación obtenida: latitud ${latitude}, longitud ${longitude}`);

    
        let map = L.map('mapita',{
            center:[36.728914,-4.434598],
            zoom: 14
        })
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map)
        
        //Marcador
        L.Routing.control({
            waypoints:[
                L.latLng(latitude, longitude),
                L.latLng(36.728914,-4.434598)
            ],
            language: 'es',
    
        }).addTo(map);
    }
        //Función para error en geolocalización (Solo se muestra la localización de la sede)
    function error(){
        console.warn("No se pudo obtener la posición del usuario. Usando coordenadas predeterminadas.");
        let map = L.map('mapita', {
            center: [36.728914,-4.434598],
            zoom: 14
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Mi openStreetMap'
        }).addTo(map);
    
    }
    
    
})

