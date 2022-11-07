console.log("the message!")


let theUser = "rebecca"
let theNumber = 800000
console.log(theUser + " " + theNumber)
// legacey variable -- var
// ES6: let , const

const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('main')
let theTxt = document.getElementById('theText')

theButton.addEventListener('click', changeColor)


function changeColor(){
    console.log("horray!")
    theTxt.textContent = "you clicked the button!"
    theMain.style.backgroundColor = "yellow"
    

}
let thePara;

function getReal(){
    console.log("ya real")
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  
    thePara =  document.createElement("p");
   const theContent = document.createTextNode("what the waht?")
    thePara.appendChild(theContent);
    const thisDiv = document.querySelector("div");
    document.body.insertBefore(thePara,thisDiv)
}

document.getElementById('fire').addEventListener('click', getReal)

