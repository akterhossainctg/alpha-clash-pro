// function play(){
//     // jevabe 1 clck a home section k gayeb kore dewa jay
//     const homeSection = document.getElementById('Home-screen')
//     homeSection.classList.add('hidden');

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event){
    const playerPressed= event.key;
    // console.log( 'player Pressed', playerPressed)
    // get the expected to press

    const currentAlphabetElement=document.getElementById('current-alphabet')
    const currentAlphabet= currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //cheak match or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you press correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed . you lost a life')
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    //get a random alphabet generate
    const alphabet = getARandomAlphabet();
    // console.log( alphabet)

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet)

}

function play(){
    hideElementById('Home-screen')
    showElementById('play-ground')
    continueGame()
}