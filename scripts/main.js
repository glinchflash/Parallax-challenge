let ghosty = document.getElementById('ghosty');

document.addEventListener('keydown', e =>{
    if (e.key ===  " "){
        ghosty.classList.add('ghostyJump');
        console.log('spaced');
    }
    setTimeout(function (){
        ghosty.classList.remove("ghostyJump");
        ghosty.removeAttribute("style");
    },1000)
});


