let ghosty = document.getElementById('ghosty');
let press = false;

document.addEventListener('keypress', e =>{
    console.log(press);
    if (press ){
        return;
    } else{
        if (e.key ===  " "){
            ghosty.classList.add('ghostyJump');
        }
        press = true;
        console.log(press);
    }
    setTimeout(function (){
        ghosty.classList.remove("ghostyJump");
        ghosty.removeAttribute("style");
    },1400)

    setTimeout(function () {
        press = false;
        console.log(press);
    },1450);
    console.log(press);
});
