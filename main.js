const containerOfBG = document.querySelector('.containerBG');
const arrayOfLetter = ['⏿','⏲','▲','✋','✀','♘','䷸','⯂','☢','⛇'
,'♜','⭗','❤','⛟','❫','❞','➽','⚫','☁','▩','☎','⛏','◆','▣','◙','€','@','+','£'];
function createElementsInElement (container,element,numberOfElements,arrayForFramesContent,classForElement,classFramesContent){
    let n = 0;
    let elements;
    let inElements;
    while(n <= numberOfElements){
        n++;
        elements = document.createElement(element);
        inElements = document.createElement('div');
        
        inElements.textContent = arrayForFramesContent[Math.floor(Math.random()*29)];
        inElements.classList.add(classFramesContent)
        elements.style.cssText = 'width :' + container.offsetWidth/Math.sqrt(numberOfElements) + 'px;'
        + 'height :' + container.offsetHeight/Math.sqrt(numberOfElements) + 'px';
        elements.classList.add(classForElement);
        elements.appendChild(inElements);
        container.appendChild(elements);
    }
}
let theClassOfElements = 'divCreate';
createElementsInElement(containerOfBG,'div',13*13,arrayOfLetter,theClassOfElements,'letters');
let theLettersCreate = document.querySelectorAll('.letters');
const lettersContainers = document.querySelectorAll('.'+theClassOfElements);
let arrayOfLetterCurrent = [];
var letterFind;
let finderTrigger = document.querySelector('.giveALetter');
let numberOfLetter = document.querySelector('.numberOfLetter');
let theScore = document.querySelector('.theScore');
var results;
var score;
let clickedLetters = [];
function reloadGames(){
    letterFind = arrayOfLetter[Math.floor(Math.random()*29)];
    arrayOfLetterCurrent = [];
    clickedLetters = [];
    lettersContainers.forEach(el=>{
    arrayOfLetterCurrent.push(el.childNodes[0].textContent); 
    });
    results = arrayOfLetterCurrent.filter(L => L === letterFind);
    numberOfLetter.textContent = letterFind+ ' : '+ results.length;
}
finderTrigger.addEventListener('click',function(){
    letterFind = arrayOfLetter[Math.floor(Math.random()*29)];
    arrayOfLetterCurrent = [];
    clickedLetters = [];
    lettersContainers.forEach(el=>{
    arrayOfLetterCurrent.push(el.childNodes[0].textContent); 
    });
    results = arrayOfLetterCurrent.filter(L => L === letterFind);
    numberOfLetter.textContent = letterFind+ ' : '+ results.length;
    score = results.length;
    theScore.textContent = results.length;
    
    lettersContainers.forEach((e,i) => {
        e.addEventListener('click',function(){
            clickedLetters.push(i);
            let dejaClick = clickedLetters.filter((el,idx) => el === i)
            if(e.childNodes[0].textContent === letterFind && dejaClick.length < 2){
                score--;
                console.log(score);
                theScore.textContent = score;
                if (score === 0){
                    theLettersCreate.forEach(element=>{
                        element.textContent = arrayOfLetter[Math.floor(Math.random()*29)];
                        reloadGames();
                        score = results.length;
                        theScore.textContent = results.length;
                        
                    })
                }
                 
            }
        })
    })
})











