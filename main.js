
width_of_line="15";
color= "blue";
document.getElementById("colourInput").value= color;
document.getElementById("widthInput").value= width_of_line;
canvas = document.getElementById("myCanvas");
//First we will get the canvas element using its id and store it as variable canvas so that we can manipulate the canvas through js code.
var ctx= canvas.getContext("2d");

var last_position_of_x, last_position_of_y;

var width_of_screen = screen.width;
var new_canvas_width = screen.width- 100;
var new_canvas_height = screen.height - 100;

if (width_of_screen < 992){
document.getElementById("myCanvas").width = new_canvas_width;
document.getElementById("myCanvas").height = new_canvas_height;
}

canvas.addEventListener("touchstart", my_touchStart);
// my_mousedown is the name given by us to define the function

function my_touchStart(e) {
    color = document.getElementById("colourInput").value; 
    width_of_line = document.getElementById("widthInput").value;
    console.log(width_of_line);
    console.log(color); 
    console.log("touchstart");

    // we are creating the following 2 variable to store the value of X and Y coordinates
     last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}


     
     canvas.addEventListener("touchmove", my_touchMove); 
     function my_touchMove(e) {
//we are creating the following 2 variable to store the value of X and Y coordinates         
     current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_touch_y = e.touches[0].clientY - canvas.offsetTop;

 console.log("X = " + current_touch_x + " ,Y = " + current_touch_y);
 
 
    console.log("touchmove"); 
    ctx.beginPath(); 
    ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     ctx.moveTo(last_position_of_x, last_position_of_y);
     ctx.lineTo(current_touch_x, current_touch_y);
     ctx.stroke();
 
 last_position_of_x= current_touch_x;
 last_position_of_y= current_touch_y;
}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

mouseEvent="empty";
console.log(mouseEvent);
width_of_line="15";
color= "blue";
document.getElementById("colourInput").value= color;
document.getElementById("widthInput").value= width_of_line;
canvas = document.getElementById("myCanvas");
//First we will get the canvas element using its id and store it as variable canvas so that we can manipulate the canvas through js code.
var ctx= canvas.getContext("2d");

var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);
// my_mousedown is the name given by us to define the function

function my_mousedown(e) {
    color = document.getElementById("colourInput").value; 
    width_of_line = document.getElementById("widthInput").value;
    console.log(width_of_line);
    console.log(color); 
    mouseEvent= "mousedown";
    console.log(mouseEvent);

    // we are creating the following 2 variable to store the value of X and Y coordinates
    //  mouse_x = e.clientX - canvas.offsetLeft;
    //  mouse_y = e.clientY - canvas.offsetTop;

    // console.log("X = " + mouse_x + " ,Y = " + mouse_y);
}

canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e) 
{ mouseEvent = "mouseleave";
 console.log(mouseEvent); }

 canvas.addEventListener("mouseup", my_mouseup); 
 function my_mouseup(e) {
      mouseEvent = "mouseup"; 
      console.log(mouseEvent);
     }
     canvas.addEventListener("mousemove", my_mousemove); 
     function my_mousemove(e) {
//we are creating the following 2 variable to store the value of X and Y coordinates         
     current_mouse_x = e.clientX - canvas.offsetLeft;
     current_mouse_y = e.clientY - canvas.offsetTop;
     circle()

 console.log("X = " + current_mouse_x + " ,Y = " + current_mouse_y );
 
 if (mouseEvent == "mousedown") {
    console.log("mousedown + mousemove"); 
    ctx.beginPath(); 
    ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     ctx.moveTo(last_position_of_x, last_position_of_y);
     ctx.lineTo(current_mouse_x, current_mouse_y);
     circle(current_mouse_x, current_mouse_y)
     ctx.stroke();
 }
 last_position_of_x= current_mouse_x;
 last_position_of_y= current_mouse_y;
}

function circle(current_mouse_x, current_mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= width_of_line;
    ctx.arc(current_mouse_x,current_mouse_y,42,0,2*Math.PI);
    ctx.stroke();
}

mouseEvent="empty";
console.log(mouseEvent);
width_of_line="15";
color= "blue";
document.getElementById("colourInput").value= color;
document.getElementById("widthInput").value= width_of_line;
canvas = document.getElementById("myCanvas");
//First we will get the canvas element using its id and store it as variable canvas so that we can manipulate the canvas through js code.
var ctx= canvas.getContext("2d");

var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);
// my_mousedown is the name given by us to define the function

function my_mousedown(e) {
    color = document.getElementById("colourInput").value; 
    width_of_line = document.getElementById("widthInput").value;
    console.log(width_of_line);
    console.log(color); 
    mouseEvent= "mousedown";
    console.log(mouseEvent);

    // we are creating the following 2 variable to store the value of X and Y coordinates
    //  mouse_x = e.clientX - canvas.offsetLeft;
    //  mouse_y = e.clientY - canvas.offsetTop;

    // console.log("X = " + mouse_x + " ,Y = " + mouse_y);
}

canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e) 
{ mouseEvent = "mouseleave";
 console.log(mouseEvent); }

 canvas.addEventListener("mouseup", my_mouseup); 
 function my_mouseup(e) {
      mouseEvent = "mouseup"; 
      console.log(mouseEvent);
     }
     canvas.addEventListener("mousemove", my_mousemove); 
     function my_mousemove(e) {
//we are creating the following 2 variable to store the value of X and Y coordinates         
     current_mouse_x = e.clientX - canvas.offsetLeft;
     current_mouse_y = e.clientY - canvas.offsetTop;
     circle()

 console.log("X = " + current_mouse_x + " ,Y = " + current_mouse_y );
 
 if (mouseEvent == "mousedown") {
    console.log("mousedown + mousemove"); 
    ctx.beginPath(); 
    ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     ctx.moveTo(last_position_of_x, last_position_of_y);
     ctx.lineTo(current_mouse_x, current_mouse_y);
     circle(current_mouse_x, current_mouse_y)
     ctx.stroke();
 }
 last_position_of_x= current_mouse_x;
 last_position_of_y= current_mouse_y;
}

function circle(current_mouse_x, current_mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= width_of_line;
    ctx.arc(current_mouse_x,current_mouse_y,42,0,2*Math.PI);
    ctx.stroke();
}

function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

