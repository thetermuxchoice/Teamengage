/*Elementos del html que son utilizados en el archivo Javascript, entre estos se encuentran los botones que abren y cierran la modal, además de los botones y los elementos del slider*/

/*HTML elements that are used in the Javascript file, among these are the buttons that open and close the modal, as well as the buttons and slider elements*/


const $btnClose=document.getElementById('btn-close');
const $btnModal=document.getElementById('btn-modal');
const $btnModal6=document.getElementById('btn-modal6');
const $btnModal2=document.getElementById('btn-modal2');
const $btnModal3=document.getElementById('btn-modal3');
const $btnModal4=document.getElementById('btn-modal4');
const $btnModal5=document.getElementById('btn-modal5');
const $btnModal1=document.getElementById('btn-modal1');
const $btnModal7=document.getElementById('btn-modal7');
const $btnA=document.getElementById('btn-a');
const $btnB=document.getElementById('btn-b');
const $modal=document.getElementById('div-modal');
const $sliders=document.getElementById('imagen-slider');
let $slidersImagen=document.getElementById('imagen-sliders');
const $buttons=document.getElementById('buttons');
const $imagen1=document.getElementById('imagen-1');
const $imagen2=document.getElementById('imagen-2');
const $div2=document.getElementById('div2');
const $div1=document.getElementById('div1');
const $circulo=document.getElementById('circulo');
const $section2=document.getElementById('section2');
const $home=document.getElementById('home');
let counter=0
let counter2=0

const changeImagen=()=>{
    if(counter===0){
        $slidersImagen.src='assets/Mike-3.png'
        counter++
    }else if (counter!==0){
        $slidersImagen.src='assets/Danelle-3.png'
        counter--
    }

}

const changeClass=()=>{
    if(counter2===0){
        $slidersImagen.style.opacity='0'
        $slidersImagen.style.transition='all 2s'
        counter2++
    } else if (counter2 !==0){
        $slidersImagen.style.opacity='100'
        $slidersImagen.style.transition='all 2s'
        counter2--
    }
}

setInterval(changeImagen,4000)
setInterval(changeClass,2000)

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    console.log('El usuario ha entrado en el contenedor');

  }
});



observer.observe($circulo);


const sliderElements=document.querySelectorAll('.div-1')
let slideCounter=0

const rootStyles=document.documentElement.style

/*Direcciones del slider*/
/*slider direction*/

const DIRECTION={
    RIGHT:"RIGHT",
    LEFT:"LEFT"
}

const getTransformValue=()=> Number(rootStyles.getPropertyValue('--slide-transform').replace('px',''))

/*Función para activar el slider, entre ellas se encuentran los cambios de estilos y la validación de las direcciones*/

/*Function to activate the slider,style changes and direction validation*/

const moveSlide=(direction)=>{
    const TransformValue=getTransformValue()
    if(direction==DIRECTION.LEFT && slideCounter===1){
        $btnA.style.rotate='0deg'
        $btnB.style.rotate='0deg'
        rootStyles.setProperty('--slide-transform',`${TransformValue +sliderElements[slideCounter].scrollWidth}px`)
        slideCounter--;
        $imagen1.src="./assets/Group 8.svg"
        $imagen2.src="./assets/Group 7.svg"
    }
    else if(direction==DIRECTION.RIGHT && slideCounter===0){
        $btnA.style.rotate='180deg'
        $btnB.style.rotate='180deg'
        rootStyles.setProperty('--slide-transform',`${TransformValue - sliderElements[slideCounter].scrollWidth}px`)
        slideCounter++
        $imagen1.src="./assets/Group 7.svg"
        $imagen2.src="./assets/Group 8.svg"
    }
}

/* botones de slider*/

/* slider buttons*/

/*boton de slider con evento de click para mover slider hacia la izquierda*/ 

/*slider button with click event to move slider to the left*/ 
$btnA.addEventListener("click",()=>moveSlide(DIRECTION.LEFT))


/*boton de slider con evento de click para mover slider hacia la derecha*/ 
/*
slider button with click event to move slider to the right*/ 
$btnB.addEventListener("click",()=>moveSlide(DIRECTION.RIGHT))


/*boton de cierre de modal*/ 

/*modal close button*/
$btnClose.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='none'
    
})


/*Botones para abrir la modal */

/*Buttons to open the modal*/

$btnModal.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})

$btnModal6.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})

$btnModal1.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})

$btnModal7.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})



$btnModal5.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})


$btnModal4.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})

$btnModal3.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
})


$btnModal2.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
})
