// function play(){
//     // jevabe 1 clck a home section k gayeb kore dewa jay
//     const homeSection = document.getElementById('Home-screen')
//     homeSection.classList.add('hidden');

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

function continueGame(){
    //get a random alphabet generate
    const alphabet = getARandomAlphabet();
    console.log( 'your Random alphabet', alphabet)

}

function play(){
    hideElementById('Home-screen')
    showElementById('play-ground')
    continueGame()
}