console.log("the message!")


let theUser = "rebecca"
let theNumber = 800000
console.log(theUser + " " + theNumber)
// legacey variable -- var
// ES6: let , const

const theButton = document.querySelector('button')
console.log(theButton)
let theMain = document.querySelector('body')
let theTxt = document.getElementById('theText')

theButton.addEventListener('click', changeColor)


function changeColor(){
    console.log("horray!")
    theTxt.textContent = "you clicked the button!"
    theMain.style.backgroundColor = "yellow"
}

// let thePara;
// let theGraphs = []
// let theClicks = []
function makeAll(){
    console.log("made!");
   let thePush =  document.createElement('button');
   thePush.style.backgroundColor = "green"
   // when user clicks button a new button is created
   const theContent = document.createTextNode("rebecca")
   thePush.appendChild(theContent)
   document.body.appendChild(thePush)

 
}

function getReal(){
    console.log("ya real")
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    thePara =  document.createElement("p");
   const theContent = document.createTextNode("what the waht?")
   console.log(theContent)
    thePara.appendChild(theContent);
    const thisDiv = document.querySelector("div");
    document.body.insertBefore(thePara,thisDiv);

    for (let i =0; i < 10; i++){
        console.log(i)
     
    }
    console.log(theGraphs)
}

document.getElementById('fire').addEventListener('click', makeAll)

