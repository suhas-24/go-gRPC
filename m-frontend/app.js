var shape = document.querySelector(".shape")
var start = new Date();
var highScore = Number.MAX_SAFE_INTEGER;
var size = 500; //initial size of the object

function makeShapeAppear(){
    let top = Math.random() * size
    let left = Math.random() * size
    let width = Math.random() * size/2 + size/2 + 100

    if( Math.random() > 0.5 ){
        shape.style.borderRadius = "50%" // Circle
    }else{
        shape.style.borderRadius = "0" // Square
    }
    shape.style.width =  width + "px"
    shape.style.top =  top + "px"
    shape.style.left =  left + "px"
    shape.style.height =  width + "px"

    shape.style.display = "block"
    shape.style.backgroundColor = getRandomColor()
    start = new Date().getTime();

}