var mouseEvent="emty";
var lastPositoinOF_x,lastPositoinOF_y;
canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    currentXpositionofmouse = e.clientX-canvas.offsetLeft;
    currentYpositionofmouse = e.clientY-canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.arc(currentXpositionofmouse,currentYpositionofmouse,20,0,2 * Math.PI);
        ctx.stroke();
        
    }
    lastPositoinOF_x = currentXpositionofmouse;
    lastPositoinOF_y = currentYpositionofmouse;
}

