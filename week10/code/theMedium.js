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

// document.createElement("p")

// * Intro to Native EcmaScript (JavaScript)
// * they style property object - on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style)

//##### Assignment for Thursday:
// * Read: [w3 - what is the DOM?](https://www.w3.org/TR/DOM-Level-1/introduction.html)
// * Read: [How to Apply CSS Styles to Page Elements Using JS](https://medium.com/javascript-in-plain-english/how-to-apply-css-styles-to-page-elements-using-javascript-e6d4a22a40de)
// * Work on your button code and come to class on Thursday prepared to continue working with your partner on your assignments
