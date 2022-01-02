class Player {
    constructor(name, id, color, active = false) {
        this.name = name
        this.id = id
        this.color = color
        this.active = active
        this.tokens = this.createTokens(21)
    }

    /**
     * Creates token objects for players
     * @param {number} num - Number of token objects to be created
     */
    createTokens(num) {
        const tokens = []

        for (let i = 0; i < num; i++) {
            let token = new Token(i, this)
            tokens.push(token)
        }

        return tokens
    }

    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped)
    }

    get activeToken(){
        return this.unusedTokens[0]
    }

    /**
     * Check if a player has any undropped tokens left
     * @returns {Boolean}
     */
    checkTokens(){
        return this.unusedTokens.length === 0 ? false : true
    }

}