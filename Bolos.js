

class Bolos{
    constructor(){
        this.pinsDown = [
        [1,4],
        [4,5],
        [6,4],
        [5,5],
        [10,0],
        [0,1],
        [7,3],
        [6,4],
        [10,0],
        [2,8,6],
        [0,0,0]]
        this.cont = 0;
        this.points=[];
        this.score = []
    }
    
    calcPoints(){
        for(let i = 0; i < this.pinsDown.length; i++) {
            if(i == 9) this.points.push(this.pinsDown[i][0]+this.pinsDown[i][1] +this.pinsDown[i][2]);
            else this.points.push(this.pinsDown[i][0]+this.pinsDown[i][1]);
        }
        return this.points
    }

    calcScore() {
        for(let i = 0; i < this.points.length -1; i++) {
            if(this.pinsDown[i][0]==10) this.evStrike(i)
            else if(this.points[i]==10) this.evSpare(i)
            else this.evAdd(i)
        }
        return this.score
    }
    evStrike(i){
        if(i==0) this.score.push(this.points[i] + this.pinsDown[i+1][0] +this.pinsDown[i+1][1])
         else this.score.push(this.points[i] + this.score[i-1] + this.pinsDown[i+1][0] +this.pinsDown[i+1][1])
    }
    evSpare(i){
        if(i==0) this.score.push(this.points[i] + this.pinsDown[i+1][0])
        else this.score.push(this.points[i] + this.pinsDown[i+1][0] + this.score[i-1])
    }
    evAdd(i){
        if(i==0) this.score.push(this.points[i])
        else this.score.push(this.points[i] + this.score[i-1])
    }
}

let bolos = new Bolos();
console.log(bolos.calcPoints());
console.log(bolos.calcScore());