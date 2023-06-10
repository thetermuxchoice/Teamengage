const $btnClose=document.getElementById('btn-close')
const $btnModal=document.getElementById('btn-modal')
const $btnModal2=document.getElementById('btn-modal2')
const $btnModal3=document.getElementById('btn-modal3')
const $btnModal5=document.getElementById('btn-modal5')
const $btnModal4=document.getElementById('btn-modal4')
const $item=document.getElementById('item')
const $modal=document.getElementById('div-modal')
const $sliders=document.getElementById('imagen-slider')


/*boton de cierre de modal*/ 

$btnClose.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='none'
    
})


/*Botones para abrir la modal */

$btnModal.addEventListener("click",(e)=>{
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
