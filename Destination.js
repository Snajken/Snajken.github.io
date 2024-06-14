// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



var canvas = document.getElementById('myCanvas');
var boat = document.getElementById('boatCanvas');
var x = 0;
var mouseLine = undefined;
var mouseEffect;



c = canvas.getContext('2d');
b =boat.getContext('2d');
var mouse = {
    x: undefined,
    y: undefined,
    mouseVariable: 0

}

boat.addEventListener('mousemove', function (event) {
    
        mouse.x = event.offsetX*2;
    mouse.y = event.offsetY;
    
    mouseEffect = true;
    
        
 
})
boat.addEventListener("mouseout", function (event) {
    mouseEffect = false;
    

})

//timer logik;
var lastTime = (new Date()).getTime(),
    currentTime = 0,
    delta = 0;

var targetX, currentX, newWave;
var boatX = canvas.width / 2, boatY = (canvas.height - 10) / 1.5;
var boatSpeed = 0;
function animate() {
    requestAnimationFrame(animate);
    currentTime = (new Date()).getTime();
    delta = (currentTime - lastTime) /50;
   
    c.clearRect(0, 0, innerWidth, innerHeight);
    b.clearRect(0, 0, innerWidth, innerHeight);
  
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

    
    if (currentX/2  > i) {
        x = Math.abs(((mouse.mouseVariable / 2) / (Math.sqrt((currentX / 2) - i))) * ((mouse.mouseVariable / 10) / ((Math.sqrt((currentX / 2) - i)))));
            if (x >= 30) {
                x = -1 * (currentX / 2 - i) * (currentX / 2 - i) + mouse.mouseVariable;
            }
        }
    if (currentX/2 < i) {
        x = Math.abs(((mouse.mouseVariable / 2) / (Math.sqrt(i - currentX / 2))) * ((mouse.mouseVariable / 10) / (Math.sqrt(i - currentX / 2))));
            if (x >= 30) {
                x = -1 * ((i - currentX / 2) * (i - currentX / 2)) + mouse.mouseVariable;
            }
        }
    if (currentX/2- i < 1 && currentX / 2 - i > -1) {
            x = mouse.mouseVariable;
        }
    
    
    
    c.lineTo(i, canvas.height / 1.5 - x);
    x = 0;
}
    if (Math.abs((currentX / 2) - boatX) < 50) {

        if (boatX > currentX / 2) {
            boatSpeed +=55  - Math.abs((currentX / 2) - boatX);
        }
        else if (boatX < currentX / 2) {
            boatSpeed -=55- Math.abs((currentX / 2) - boatX);
        } else {
            boatY++;
        }
    } else {
        if (boatSpeed > 0) {
            boatSpeed--;
        }
        if (boatSpeed < 0) {
            boatSpeed++;
        }
    }
    boatX += boatSpeed/25 * delta;

    if (boatX-25  > canvas.width) {
       
        boatX = +15;
    } else if (boatX+25 < 0) {
        boatX = canvas.width-15 ;
    }

    b.beginPath();
    b.moveTo(boatX, boatY);
    b.lineTo(boatX, boatY - 20);
    b.lineTo(boatX + 10, boatY - 10);
    b.closePath();
    b.fillStyle = '#fffefe';
    b.fill();
    b.strokeStyle = '#050101';
    b.lineWidth = 2;
    b.stroke();

    b.beginPath();
    b.moveTo(boatX, boatY);
    b.lineTo(boatX + 20, boatY);
    b.quadraticCurveTo(boatX + 20, boatY + 10, boatX, boatY + 10);
    b.quadraticCurveTo(boatX - 20, boatY + 10, boatX - 20, boatY);
    b.lineTo(boatX, boatY);
    b.closePath;
    b.fillStyle = '#e31c36';
    b.fill();
    b.strokeStyle = '#5b0715';
    b.stroke();

  

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

