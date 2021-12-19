let game = new Game()

let beginGame = document.getElementById('begin-game')

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGame.addEventListener('click', function() {
    game.startGame()

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
})

/*
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(e) {
    game.handleKeydown(e)
})