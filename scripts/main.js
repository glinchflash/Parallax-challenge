let startButton = document.getElementById('start-button');

startButton.addEventListener('click', ()=>{
    document.getElementById('start').style.visibility ='hidden';
    document.getElementById('ground').style.animation = 'autoscroll 3s linear infinite';
    document.getElementById('treesAndBushes').style.animation = 'autoscroll 6s linear infinite';
    document.getElementById('distantTrees').style.animation = 'autoscroll 8s linear infinite';
    document.getElementById('bushes').style.animation = 'autoscroll 10s linear infinite';
    document.getElementById('hills').style.animation = 'autoscroll 12s linear infinite';
    document.getElementById('obstacle').style.animation = 'crashCourse 3.5s infinite linear';
})



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
