const $btnClose=document.getElementById('btn-close')
const $btnModal=document.getElementById('btn-modal')
const $btnModal2=document.getElementById('btn-modal2')
const $btnModal3=document.getElementById('btn-modal3')
const $btnModal4=document.getElementById('btn-modal4')
const $modal=document.getElementById('div-modal')


$btnClose.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='none'
    
})

$btnModal.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
    
})

$btnModal3.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
})

$btnModal4.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
})



$btnModal2.addEventListener("click",(e)=>{
    e.preventDefault()
    $modal.style.display='block'
})
