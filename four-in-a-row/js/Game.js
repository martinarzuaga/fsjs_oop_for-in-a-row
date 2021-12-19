class Game {
    constructor() {
        this.board = new Board()
        this.players = this.createPlayer()
        this.ready = false
    }

    /**
     * Reutrns active player
     * @return {Object} player - The active player
     */
    get activePlayer(){
        return this.players.find(player => player.active)
    }

    /**
     * Creates two player objects
     * @returns {array} An array of two player objects
     */
    createPlayer() {
        const players = [
            new Player('Player 1', 1, '#e15258', true),
            new Player('Player 2', 2, '#e59a13')
        ]

        return players
    }

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     */
    handleKeydown(e){
        if (this.ready){
            if (e.key === 'ArrowRight'){
                // move right
                this.activePlayer.activeToken.moveRight(this.board.columns)
            } else if (e.key === 'ArrowLeft'){
                // move left
                this.activePlayer.activeToken.moveLeft()
            } else if (e.key === 'ArrowDown'){
                // play token
                this.playToken()
            }
        }
    }

    /**
    * Initialize the Game
    * */
    startGame() {
        this.board.drawHTMLBoard()
        this.activePlayer.activeToken.drawHTMLToken()
        this.ready = true
    }

    playToken() {
        let spaces = this.board.spaces
        let activeToken = this.activePlayer.activeToken
        let targetColumn = spaces[activeToken.columnLocation]
        let targetSpace = null

        for (let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space
            }
        }

        if (targetSpace !== null) {
            game.ready = false
            activeToken.drop(targetSpace)
        }
    }
}