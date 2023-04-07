$('div').click(function (){
    ifChecked($(this));
    stickerChange();
    checkWinner();
    showWinner('win');        
    showWinner('draw');        
});

function l(msg){
    console.log(msg);
};

let pattern = document.getElementsByTagName('div').length;
let sticker = 'X';
var winner = '';

function stickerChange(){
    if(sticker == 'X')
        sticker = 'O';
    else if(sticker == 'O')
        sticker = 'X';
}

function ifChecked(currentBlock){
    l(currentBlock.text())
    if (currentBlock.text() !== sticker && currentBlock.text() === '')
        currentBlock.text(sticker);
}

function showWinner(status){
    if(status === 'win')
    if(winner !== ''){
        $('#name').text(`Winner is ${winner}`);
        $('div').text('');
        winner = '';
    }

    if(status === 'draw'){
        if($('div').text().length == 9){
            $('#name').text(`Draw \nNo one win`);
            $('div').text('');
        }
    }    
}

function checkWinner(){
    if (
    (document.getElementsByTagName('div') [0].textContent == 'X' && document.getElementsByTagName('div') [1].textContent == 'X' && document.getElementsByTagName('div') [2].textContent == 'X') ||
    (document.getElementsByTagName('div') [3].textContent == 'X' && document.getElementsByTagName('div') [4].textContent == 'X' && document.getElementsByTagName('div') [5].textContent == 'X') ||
    (document.getElementsByTagName('div') [6].textContent == 'X' && document.getElementsByTagName('div') [7].textContent == 'X' && document.getElementsByTagName('div') [8].textContent == 'X')
    )
        winner = 'X';
    
    else if (
    (document.getElementsByTagName('div') [0].textContent == 'X' && document.getElementsByTagName('div') [3].textContent == 'X' && document.getElementsByTagName('div') [6].textContent == 'X') ||
    (document.getElementsByTagName('div') [1].textContent == 'X' && document.getElementsByTagName('div') [4].textContent == 'X' && document.getElementsByTagName('div') [7].textContent == 'X') ||
    (document.getElementsByTagName('div') [2].textContent == 'X' && document.getElementsByTagName('div') [5].textContent == 'X' && document.getElementsByTagName('div') [8].textContent == 'X')
    )
    winner = 'X';
    
    else if (
    (document.getElementsByTagName('div') [0].textContent == 'X' && document.getElementsByTagName('div') [4].textContent == 'X' && document.getElementsByTagName('div') [8].textContent == 'X') ||
    (document.getElementsByTagName('div') [2].textContent == 'X' && document.getElementsByTagName('div') [4].textContent == 'X' && document.getElementsByTagName('div') [6].textContent == 'X')
    )
    winner = 'X';
    
    else if (
    (document.getElementsByTagName('div') [0].textContent == 'O' && document.getElementsByTagName('div') [1].textContent == 'O' && document.getElementsByTagName('div') [2].textContent == 'O') ||
    (document.getElementsByTagName('div') [3].textContent == 'O' && document.getElementsByTagName('div') [4].textContent == 'O' && document.getElementsByTagName('div') [5].textContent == 'O') ||
    (document.getElementsByTagName('div') [6].textContent == 'O' && document.getElementsByTagName('div') [7].textContent == 'O' && document.getElementsByTagName('div') [8].textContent == 'O')
    )
    winner = 'O';
    
    else if (
    (document.getElementsByTagName('div') [0].textContent == 'O' && document.getElementsByTagName('div') [3].textContent == 'O' && document.getElementsByTagName('div') [6].textContent == 'O') ||
    (document.getElementsByTagName('div') [1].textContent == 'O' && document.getElementsByTagName('div') [4].textContent == 'O' && document.getElementsByTagName('div') [7].textContent == 'O') ||
    (document.getElementsByTagName('div') [2].textContent == 'O' && document.getElementsByTagName('div') [5].textContent == 'O' && document.getElementsByTagName('div') [8].textContent == 'O')
    )
    winner = 'O';
    
    else if (
    (document.getElementsByTagName('div') [0].textContent == 'O' && document.getElementsByTagName('div') [4].textContent == 'O' && document.getElementsByTagName('div') [8].textContent == 'O') ||
    (document.getElementsByTagName('div') [2].textContent == 'O' && document.getElementsByTagName('div') [4].textContent == 'O' && document.getElementsByTagName('div') [6].textContent == 'O')
    )
    winner = 'O';
}