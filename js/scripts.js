
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    let intervalId;

    function updateGallery() {
        galleryItems.forEach((item, index) => {
            item.classList.remove('gallery-item-1', 'gallery-item-2', 'gallery-item-3',
                'gallery-item-4', 'gallery-item-5', 'gallery-item-6',
                'gallery-item-7', 'gallery-item-8', 'gallery-item-9',
                'gallery-item-10', 'gallery-item-11', 'gallery-item-12',
                'gallery-item-13', 'gallery-item-14', 'gallery-item-15', 'gallery-item-16');
            const newIndex = (index + currentIndex) % galleryItems.length;
            item.classList.add(`gallery-item-${newIndex + 1}`);
        });
    }

    function movePrev() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateGallery();
    }

    function moveNext() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateGallery();
    }

    document.querySelector('.gallery-control.next').addEventListener('click', () => {
        clearInterval(intervalId); // Stop the automatic cycling
        moveNext();
        intervalId = setInterval(moveNext, 3000); // Restart the automatic cycling
    });

    document.querySelector('.gallery-control.prev').addEventListener('click', () => {
        clearInterval(intervalId); // Stop the automatic cycling
        movePrev();
        intervalId = setInterval(moveNext, 3000); // Restart the automatic cycling
    });

    intervalId = setInterval(moveNext, 3000);

    updateGallery();
});

//
const menu = document.querySelector(".menu>i")
const opciones = document.querySelector(".opciones")

menu.addEventListener("click", ()=> {
    opciones.classList.toggle("show")
    if(menu.classList.contains("bx-menu-alt-right")){
        menu.classList.remove("bx-menu-menu-alt-right")
    }else{
        menu.classList.add("bx-menu-alt-right")
    }

})


// Obtener el header y la sección hero
const header = document.querySelector('header');
const heroSection = document.getElementById('hero');

// Función para cambiar la clase del header al hacer scroll
function handleScroll() {
    const heroMidpoint = heroSection.offsetTop + (heroSection.offsetHeight / 2);

    if (window.scrollY > heroMidpoint) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Evento para escuchar el scroll y llamar a la función
window.addEventListener('scroll', handleScroll);


//
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.content > div'); // Selecciona todos los slides
    let currentSlide = 0;
    const slideInterval = 2000; // Intervalo en milisegundos entre cada cambio de slide

    function nextSlide() {
        slides[currentSlide].classList.remove('active'); // Remueve la clase active del slide actual
        currentSlide = (currentSlide + 1) % slides.length; // Calcula el índice del próximo slide
        slides[currentSlide].classList.add('active'); // Agrega la clase active al próximo slide
    }

    // Función para iniciar el slider automático
    function startSlider() {
        setInterval(nextSlide, slideInterval); // Llama a nextSlide cada slideInterval milisegundos
    }

    startSlider(); // Inicia el slider automático al cargar la página
});



//pelicula
function changeImagesForMobile() {
    if (window.innerWidth >= 768) {
      document.querySelectorAll('.swiper-slide img')[0].src = '../imagenes/intensamente 2.png';
      document.querySelectorAll('.swiper-slide img')[1].src = '../imagenes/intensamente-1.jpg';
      document.querySelectorAll('.swiper-slide img')[2].src = '../imagenes/oppenheimer.jpg';
      document.querySelectorAll('.swiper-slide img')[3].src = '../imagenes/kungfuP.jpg';
      document.querySelectorAll('.swiper-slide img')[4].src = '../imagenes/G-K2.png';
    } else {
      document.querySelectorAll('.swiper-slide img')[0].src = '../imagenes/intensamente 2-2.png';
      document.querySelectorAll('.swiper-slide img')[1].src = '../imagenes/intensamente-1-2.jpg';
      document.querySelectorAll('.swiper-slide img')[2].src = '../imagenes/oppenheimer2.jpg';
      document.querySelectorAll('.swiper-slide img')[3].src = '../imagenes/KungfuP2.jpg';
      document.querySelectorAll('.swiper-slide img')[4].src = '../imagenes/G-K2.jpg';
    }
  }
  
  // Llama a la función al cargar la página
  changeImagesForMobile();
  
  // Escucha los cambios en el tamaño de la ventana
  window.addEventListener('resize', changeImagesForMobile);



  
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
  });