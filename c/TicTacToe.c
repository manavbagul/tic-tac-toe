// Online C compiler to run C program online
#include <stdio.h>
void checkPattern();
void stickerChange();
void start();
void showGame();
void showGlobals();
void checkWinner();

int filledBlockCount = 0;
int index= 0;
char pattern[9] = {'\0'};
char sticker = 'X';
char winner = '\0';

int main() {
    
    start();
    
    printf("===---+++ Winner Is %c",winner);
    
    return 0;
}

void start(){
    int check = 0;
    // Write C code here
    printf("Tic Tac Toe\n");
    
    while(1){
        checkPattern();
        checkWinner();
        if( winner != '\0')
            return;
    }
}

void checkPattern(){
    char keyPressed;
    scanf(" %c",&keyPressed);
    index = keyPressed - 49;
    if(keyPressed >= '1' && keyPressed <= '9')
        if(filledBlockCount <= 9)
        {
            if( pattern[index] != sticker)
            {
                stickerChange();
                pattern[index] = sticker;
                filledBlockCount++;
            }
        }
        showGame();
        showGlobals();
}

void stickerChange(){
    if(sticker == 'X')
        sticker = 'O';
    else if(sticker == 'O')
        sticker = 'X';
}

void showGame(){
        for(int i = 0; i <= 8; i++){
            printf("%c",pattern[i]);
            if(i == 2 || i ==5 || i==8)
                printf("\n");
        }
        printf("\n");
}

void showGlobals(){
    printf("\nfilledBlockCount: %i\nindex: %i\nsticker: %c",filledBlockCount,index,sticker);
}

void checkWinner(){
    if (
    (pattern[0] == 'X' && pattern[1] == 'X' && pattern[2] == 'X') ||
    (pattern[3] == 'X' && pattern[4] == 'X' && pattern[5] == 'X') ||
    (pattern[6] == 'X' && pattern[7] == 'X' && pattern[8] == 'X')
    )
        winner = 'X';
    
    else if (
    (pattern[0] == 'X' && pattern[3] == 'X' && pattern[6] == 'X') ||
    (pattern[1] == 'X' && pattern[4] == 'X' && pattern[7] == 'X') ||
    (pattern[2] == 'X' && pattern[5] == 'X' && pattern[8] == 'X')
    )
    winner = 'X';
    
    else if (
    (pattern[0] == 'X' && pattern[4] == 'X' && pattern[8] == 'X') ||
    (pattern[2] == 'X' && pattern[4] == 'X' && pattern[6] == 'X')
    )
    winner = 'X';
    
    else if (
    (pattern[0] == 'O' && pattern[1] == 'O' && pattern[2] == 'O') ||
    (pattern[3] == 'O' && pattern[4] == 'O' && pattern[5] == 'O') ||
    (pattern[6] == 'O' && pattern[7] == 'O' && pattern[8] == 'O')
    )
    winner = 'O';
    
    else if (
    (pattern[0] == 'O' && pattern[3] == 'O' && pattern[6] == 'O') ||
    (pattern[1] == 'O' && pattern[4] == 'O' && pattern[7] == 'O') ||
    (pattern[2] == 'O' && pattern[5] == 'O' && pattern[8] == 'O')
    )
    winner = 'O';
    
    else if (
    (pattern[0] == 'O' && pattern[4] == 'O' && pattern[8] == 'O') ||
    (pattern[2] == 'O' && pattern[4] == 'O' && pattern[6] == 'O')
    )
    winner = 'O';
}
