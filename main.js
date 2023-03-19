//Delcare all HTML constants
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

/*Console Testing{
console.log(statusDiv);
console.log(resetDiv);
console.log(cellDivs);
}*/

/* Define two boolens, one for denoting which player is 
on the turn and second to use the reset button*/

let gameIsLive = true;
let xPlays = true;


/*This function is used to check the status of the game i.e
whether the game is ongoing or the someone has won the game
or there is a draw*/


const checkStatus = () => {
    const tl = cellDivs[0].classList[1];
    const tm = cellDivs[1].classList[1];
    const tr = cellDivs[2].classList[1];
    const ml = cellDivs[3].classList[1];
    const mm = cellDivs[4].classList[1];
    const mr = cellDivs[5].classList[1];
    const bl = cellDivs[6].classList[1];
    const bm = cellDivs[7].classList[1];
    const br = cellDivs[8].classList[1];

    //Checking if there is a winner

    if(tl && (tl == tm) && (tm == tr))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${tl} has Won!!`;
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    }

    else if(ml && (ml == mm) && (ml == mr))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${ml} has Won!!`;
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    }

    else if(bl && (bl == bm) && (bl == br))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${bl} has Won!!`;
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    }

    else if(tm && (tm == mm) && (tm == bm))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${tm} has Won!!`;
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    }

    else if(tl && (tl == ml) && (tl == bl))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${tl} has Won!!`;
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    }

    else if(tr && (tr == mr) && (tr == br))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${tr} has Won!!`;
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    }

    else if(tl && (tl == mm) && (tl == br))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${tl} has Won!!`;
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    }

    else if(tr && (tr == mm) && (tr == bl))
    {
        gameIsLive = false;
        statusDiv.innerHTML = `${tr} has Won!!`;
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }

    else if(tl && tm && tr && ml && mm && mr && bl && bm && br)
    {
        gameIsLive = false;
        statusDiv.innerHTML = 'It is a draw!!';
    }

    else
    {
        xPlays = !xPlays;

        if(xPlays)
        statusDiv.innerHTML = `X's turn`;

        else
        statusDiv.innerHTML = `O's turn`;
    }
};

//Function to reset the console once reset is pressed

const handleReset = (e) => {
    xPlays = true;
    statusDiv.innerHTML = `X's turn`;

    for(const cellDiv of cellDivs)
    {
        cellDiv.classList.remove('X');
        cellDiv.classList.remove('O');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
};

/*This function is used to assign valus 'x' or 'o' to 
the cell and assign it only once*/

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if(!gameIsLive|| (classList[2] == 'X')||(classList[2] == 'O'))
    return ;

    if(xPlays)
    {
        classList.add('X');
        checkStatus();
    }

    else
    {
        classList.add('O');
        checkStatus();
    }
};

//event Listeners

resetDiv.addEventListener('click', handleReset);

for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick);
}
