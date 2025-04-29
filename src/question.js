class Question {
    // YOUR CODE HERE:
    //
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty; /* será un numero de 1 a 3 donde 1 sera el facil y 3 el mas dificil*/
    }

    // 2. shuffleChoices()
    shuffleChoices() {
        for ( let i = this.choices.length - 1; i > 0 ; i--) {
            const j = Math.floor(Math.random() * (i + 1) );
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
        }
        return this.choices;
    }
}      