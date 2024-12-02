export function carouselImageText(){
    //CAROUSEL variables
const text1_opciones = [
  "Nueva temporada, nuevos cambios",
  "Garantía",
  "Nuestro compromiso",
  "Nuevos talentos"
];
const text2_opciones = [
  "Lorem",
  "Lorem",
  "Lorem",
  "Lorem"
];
const imagen_opciones = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F12%2Fdb%2Fc3%2F12dbc39778d5200d1f992cecdaa62755.jpg&f=1&nofb=1&ipt=a2f105420f32a587fac65acf1bfd8592cd2c81aae54930e41a9ad41616e3d763&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.lifestyleasia.com%2Fwp-content%2Fuploads%2Fsites%2F7%2F2022%2F11%2F15165139%2Fpexels-ketut-subiyanto-5038787.jpg&f=1&nofb=1&ipt=6a83f08d58b5895e0d36a9174ed5fa2ca050abc1d44f094fbb1407379c9d34de&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190809155144-istock-1016971486-super-tease.jpg&f=1&nofb=1&ipt=2ffd4a47d6077cbb2e87c133a409ee01e435f788179f7d41e0f2a512ab0ce43f&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.epitech-it.es%2Fwp-content%2Fuploads%2F2021%2F02%2Fkelly-sikkema-YK0HPwWDJ1I-unsplash.jpg&f=1&nofb=1&ipt=ea644bf856667abd32852b63349cd8862230119e4ca09d99c1d88d327a3ccd9a&ipo=images"];
var i = 0;
const texto1Actual = document.getElementById("texto1-Actual");
const texto2Actual = document.getElementById("texto2-Actual");
const ImagenActual = document.getElementById("image");
const carouselMenuMain = document.getElementById("carousel-menu-main");
const boton1 = document.getElementById("boton-1");
const boton2 = document.getElementById("boton-2");

//Mostrar el contenido de los arrays
function actualizarCarousel(i){
    texto1Actual.innerText = text1_opciones[i];
    texto2Actual.innerText = text2_opciones[i];
    ImagenActual.style.backgroundImage = "url(" + imagen_opciones[i] + ")";
    carouselMenuMain.style.backgroundImage = "url(" + imagen_opciones[i] + ")";
}

actualizarCarousel(i);
//Animación del carousel a través de los botones (cambio de las clases)
boton1.addEventListener('click', function(){
    texto1Actual.classList.add("siguiente");
    texto2Actual.classList.add("siguiente");
    ImagenActual.classList.add("siguiente");


    i = (i + 1) % text1_opciones.length;

  
  setTimeout(() => {
    actualizarCarousel(i)
    texto1Actual.classList.remove("siguiente");
    texto2Actual.classList.remove("siguiente");
    ImagenActual.classList.remove("siguiente");
}, 650);
});

boton2.addEventListener('click', function() {
    texto1Actual.classList.add("anterior");
    texto2Actual.classList.add("anterior");
    ImagenActual.classList.add("anterior");
    i = (i - 1 + text1_opciones.length) % text1_opciones.length
  setTimeout(() => {
    actualizarCarousel(i)
    texto1Actual.classList.remove("anterior");
    texto2Actual.classList.remove("anterior");
    ImagenActual.classList.remove("anterior");
}, 650);
});


//Un evento para que el carousel desaparezca a partir de cierto tamaño de la pantalla, pensado para dispositivos más pequeños
window.addEventListener('resize', () =>{
  if (window.innerWidth < 700) {
    carouselMenuMain.classList.add("oculto")
  }else {
    carouselMenuMain.classList.remove("oculto");
}
})
}

//GALERIA DINAMICA
export function mostrarGaleria(){
    
//GALERIA animación con la altura de la ventana
    const scrollCard = document.querySelectorAll('.card-container','.galeria-text')
    const altura = window.innerHeight * 0.8

    scrollCard.forEach(card => {
        const cardTop = card.getBoundingClientRect().top

        if(cardTop < altura){
            card.classList.add('show')
        } else {
            card.classList.remove('show')
        }
    })


}