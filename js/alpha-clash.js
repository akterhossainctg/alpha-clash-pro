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
        //update score
        // 1 : get the current score
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText)
        // 2: increase the score by 1
        const newScore = currentScore + 1 ;
        // 3 :show the update score
        currentScoreElement.innerText = newScore;
        //start a new element
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed . you lost a life')
        //1:get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        currentLife = parseInt(currentLifeText);
        //2:reduce the life count
        const newLife = currentLife - 1;
        //3: display the updated life count
        currentLifeElement.innerText= newLife;

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