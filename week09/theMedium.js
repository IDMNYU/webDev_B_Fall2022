console.log("the message!")

let theVariable = "rebecca"
let theother = 89007


console.log(theVariable + theother)

// init p5.js

function setup(){
    console.log("p5 is here!")
    createCanvas(400,400)
    background(200,200,200)
}

function draw(){
    ellipse(100, 100, 40,40)
    rect(mouseX,mouseY, 50,50)
}