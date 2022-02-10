var shape = document.querySelector(".shape")
console.log(shape)
var start = new Date();
var highScore = Number.MAX_SAFE_INTEGER;
var size = 500; //initial size of the object

function makeShapeAppear(){
    let top = Math.random() * size
    let left = Math.random() * size
    let width = Math.random() * size/2 + 100

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

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() * 2000)
}

appearAfterDelay()
shape.onclick =  function(){
    shape.style.display = "none"
    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + " seconds"
    if( timeTaken < highScore ){
        highScore = timeTaken
        document.getElementById("highScore").innerHTML = highScore + " seconds"
    }
    appearAfterDelay()
}