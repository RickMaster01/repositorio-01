const images=document.querySelectorAll('.imagen');
const modal=document.getElementById('modal');
const modaldescription= document.getElementById('modal-description');
images.forEach(image=>{
    image.addEventListener('click',() =>{
        modaldescription.textContent = image.dataset.description;
        modal.style.display='block';
    });
});
document.querySelector('.close').addEventListener('click',()=>{
    modal.style.display='none';
});

window.addEventListener('click',(event)=>{
    if(event.target===modal){
        modal.style.display='none';
    }
});