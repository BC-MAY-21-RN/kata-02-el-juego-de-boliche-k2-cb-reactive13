

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
        [2,6,2]]
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
        let x;
        for(let i = 0; i < this.points.length; i++) {
            if(i==0) this.score.push(this.points[i])
            else this.score.push(this.points[i] + this.score[i-1])
            
        }
        return this.score
    }
    evStrike(x){
        
    }
    evSpare(){

    }
}

let bolos = new Bolos();
console.log(bolos.calcPoints());
console.log(bolos.calcScore());