var canvas = document.getElementById('Index');
var x = 0;
var mouseLine = undefined;
var mouseEffect;


c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined,
    mouseVariable: 0

}

canvas.addEventListener('mousemove', function (event) {
    
        mouse.x = event.offsetX;
    mouse.y = event.offsetY;
    
    mouseEffect = true;
    
        
 
})
canvas.addEventListener("mouseout", function (event) {
    mouseEffect = false;
    

})

//timer logik;
var lastTime = (new Date()).getTime(),
    currentTime = 0,
    delta = 0;

var targetX, currentX,newWave;

function animate() {
    requestAnimationFrame(animate);
    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime) /50;
   
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.moveTo(0, canvas.height / 1.5);
  
    if (mouseEffect) {
        if (newWave) {
            currentX = mouse.x;
            targetX = mouse.x;
            console.log(currentX, mouse.x);
            newWave = false;
        }
            if (mouse.mouseVariable < 50) {
                mouse.mouseVariable += delta;
                
               
            }
            targetX = mouse.x;

            
        } else {
            if (mouse.mouseVariable > 0) {
                mouse.mouseVariable -= delta;
            } else {
                newWave = true
                mouse.mouseVariable = 0;
                    
                
            }
        }
 
    
    if (currentX > targetX) {
        currentX -= delta*5;
    } else if (currentX < targetX) {
        currentX += delta*5;
    } else currentX = targetX;
    

    for (var i = 0; i < canvas.width; i++) {

        
        if (currentX / 2 > i) {
            x = Math.abs(((mouse.mouseVariable / 2) / (Math.sqrt((currentX / 2) - i))) * ((mouse.mouseVariable / 10) / ((Math.sqrt((currentX / 2) - i)))));
                if (x >= 30) {
                    x = -1 * (currentX / 2 - i) * (currentX / 2 - i) + mouse.mouseVariable;
                }
            }
        if (currentX / 2 < i) {
            x = Math.abs(((mouse.mouseVariable / 2) / (Math.sqrt(i - currentX / 2))) * ((mouse.mouseVariable / 10) / (Math.sqrt(i - currentX / 2))));
                if (x >= 30) {
                    x = -1 * ((i - currentX / 2) * (i - currentX / 2)) + mouse.mouseVariable;
                }
            }
        if (currentX / 2 - i < 1 && currentX / 2 - i > -1) {
                x = mouse.mouseVariable;
            }
        
        
        
        c.lineTo(i, canvas.height / 1.5 - x);
        x = 0;
    }
    c.lineTo(canvas.width, canvas.height/1.5);
    c.quadraticCurveTo(canvas.width, canvas.height, canvas.width / 2, canvas.height);
    c.quadraticCurveTo(0, canvas.height,0,canvas.height/1.5 );
    c.closePath();
    c.fillStyle = '#8ED6FF';
    c.fill();
    c.strokeStyle = '#44bfe9';
    c.stroke();
    lastTime = currentTime;
}

animate();
