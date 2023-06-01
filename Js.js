const $btnClose=document.getElementById('btn-close')
const $btnModal=document.getElementById('btn-modal')
const $btnModal2=document.getElementById('btn-modal2')
const $btnModal3=document.getElementById('btn-modal3')
const $btnModal4=document.getElementById('btn-modal4')
const $item=document.getElementById('item')
const $modal=document.getElementById('div-modal')
const $btnSlide=document.getElementById('slide-button')
const $btnSlide2=document.getElementById('slide-button2')
const $first=document.getElementById('sliders')
const $second=document.getElementById('second')
const $last=document.getElementById('last')
let w=window.innerWidth

/*boton de cierre de modal*/ 

$btnClose.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='none'
    
})

/*Boton de inicio en el slider*/

/*se especifica con la propiedad innerWidth del objeto Window cual es la resolución de la pantalla, 
para posteriormente con una serie de if else, definir que cambios de estilos se aplicaran con el evento click*/

$btnSlide.addEventListener("click",(e)=>{
    e.preventDefault()
    if(w >= 1024 && w < 1280 ){
        $first.style.marginLeft='-50%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='345px'
        $last.style.marginRight='100px'
        $last.style.marginleft='20px'
        $item.style.marginRight='20px'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'
        

    } else if(w >= 1280 && w < 1440 ){
        $first.style.marginLeft='-50%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='395px'
        $last.style.marginRight='170px'
        $last.style.marginleft='20px'
        $item.style.marginRight='20px'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'

    } else if(w >= 1440 && w <= 1920 ){
        $first.style.marginLeft='-30%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='245px'
        $last.style.marginLeft='4%'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'

    } else if( w >= 768 && w < 1024 ){
        $first.style.marginLeft='-40%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='20%'
        $last.style.marginLeft='10px'
        $item.style.marginRight='20px'
        $last.style.marginLeft='0%'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'
    }else if(w > 1920){
        $first.style.marginLeft='-25%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='225px'
        $last.style.marginLeft='30px'
        $item.style.marginRight='10%'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'
    }  
})


/*Boton de regreso en el slider*/

$btnSlide2.addEventListener("click",(e)=>{
    e.preventDefault()
    if(w >= 1024 && w < 1280 ){
        $first.style.marginLeft='50%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='345px'
        $last.style.marginRight='100px'
        $last.style.marginleft='20px'
        $item.style.marginRight='20px'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'


    } else if(w >= 1280 && w < 1440 ){
        $first.style.marginLeft='40%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='0%'
        $last.style.marginRight='0%'
        $item.style.marginRight='20%'
        $btnSlide.style.display="block"
        $btnSlide2.style.visibility="hidden"
        $btnSlide2.style.opacity="0%"
        $btnSlide2.style.transition='opacity 1.5s'

    } else if(w >= 1440 && w < 1920 ){
        $first.style.marginLeft='40%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='0px'
        $item.style.marginRight='15%'
        $btnSlide.style.display="block"
        $btnSlide2.style.visibility="hidden"
        $btnSlide2.style.opacity="0%"
        $btnSlide2.style.transition='opacity 1.5s'
    } else if(w >= 768){
        $first.style.marginLeft='40%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='0%'
        $last.style.marginLeft='4%'
        $item.style.marginRight='10%'
        $btnSlide2.style.visibility="hidden"
        $btnSlide2.style.opacity="0%"
        $btnSlide.style.display="block"
    } else{
        $first.style.marginLeft='90%'
        $first.style.transition='margin-left 1s'
        $second.style.marginLeft='225px'
        $last.style.marginLeft='40px'
        $last.style.backgroundColor='red'
        $btnSlide.style.display="none"
        $btnSlide2.style.visibility="visible"
        $btnSlide2.style.opacity="100%"
        $btnSlide2.style.transition='opacity 1.5s'
    }
})

/*Botones para abrir la modal */

$btnModal.addEventListener("click",(e)=>{
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
