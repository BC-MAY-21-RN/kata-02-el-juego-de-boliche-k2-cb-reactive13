/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
// TODO, condicionar la ultima posicion
// TODO, inicializar aleatoriamente los pinsDowns

class Bolos {
    constructor(pinsDown) {
        this.pinsDown = pinsDown
        this.cont = 0
        this.points = []
        this.score = []
    }

    calcPoints() {
        for (let i = 0; i < this.pinsDown.length; i++) {
            if (i === 9) this.points.push(this.pinsDown[i][0] + this.pinsDown[i][1] + this.pinsDown[i][2])
            else this.points.push(this.pinsDown[i][0] + this.pinsDown[i][1])
        }
        return this.points
    }

    calcScore() {
        for (let i = 0; i < this.points.length - 1; i++) {
            if (this.pinsDown[i][0] === 10) this.evStrike(i)
            else if (this.points[i] === 10) this.evSpare(i)
            else this.evAdd(i)
        }
        return this.score
    }

    evStrike(i) {
        // if (i === 0) this.score.push(this.points[i] + this.pinsDown[i + 1][0] + this.pinsDown[i + 1][1])
        // else this.score.push(this.points[i] + this.score[i - 1] + this.pinsDown[i + 1][0] + this.pinsDown[i + 1][1])

        switch (i) {
            case 0:
                if (this.pinsDown[i + 1][0] !== 10) this.score.push(this.points[i] + this.pinsDown[i + 1][0] + this.pinsDown[i + 1][1])
                else this.score.push(this.points[i] + this.pinsDown[i + 1][0] + this.pinsDown[i + 2][0])
                break
            case 9:
                this.score.push(this.score[i - 1] + this.pinsDown[i][0] + this.pinsDown[i][1] + this.pinsDown[i][2])
                break
            default:
                if (this.pinsDown[i + 1][0] !== 10) this.score.push(this.points[i] + this.score[i - 1] + this.pinsDown[i + 1][0] + this.pinsDown[i + 1][1])
                else this.score.push(this.points[i] + this.score[i - 1] + this.pinsDown[i + 1][0] + this.pinsDown[i + 2][0])
                break
        }
    }

    evSpare(i) {
        if (i === 0) this.score.push(this.points[i] + this.pinsDown[i + 1][0])
        else this.score.push(this.points[i] + this.pinsDown[i + 1][0] + this.score[i - 1])
    }

    evAdd(i) {
        if (i === 0) this.score.push(this.points[i])
        else this.score.push(this.points[i] + this.score[i - 1])
    }
}

module.exports = { Bolos }
