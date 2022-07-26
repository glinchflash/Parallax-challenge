const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 900;
const CANVAS_HEIGHT= canvas.height= 800;

let gameSpeed = 5;

const groundLayer = new Image();
groundLayer.src = 'images/01_ground.png';
const treesAndBushesLayer = new Image();
treesAndBushesLayer.src = 'images/02_trees and bushes.png';
const distantTreesLayer = new Image();
distantTreesLayer.src = 'images/03_distant_trees.png';
const bushesLayer = new Image();
bushesLayer.src = 'images/04_bushes.png';
const hillLayer = new Image();
hillLayer.src = 'images/05_hill1.png';
const cloudsLayer = new Image();
cloudsLayer.src = 'images/08_clouds.png';
const distantCloudLayer = new Image();
distantCloudLayer.src = 'images/09_distant_clouds1.png';


function animation() {
    context.drawImage(groundLayer,0,0);
    requestAnimationFrame(animation);
}
animation();

document.getElementById('test').style.backgroundImage = "url('images/01_ground.png')";
document.getElementById('test').style.width = "500px";
document.getElementById('test').style.height = "500px";
