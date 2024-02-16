function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){;
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){;
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstwxyz';
    const alphabets = alphabetString.split('');

    const RandomNumber = Math.random()*25;
    const index = Math.round(RandomNumber);
    const alphabet=alphabets[index];
    return alphabet;
}
// function getARandomAlphabet(){
//     //get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstwxyz';
//     const alphabets= alphabetString.split('');
//     // console.log(alphabet)

//     //get a random index between 0-25
//     const RandomNumber = Math.random()*25;
//     const index = Math.round(RandomNumber);
//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;
// }