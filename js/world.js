class RoomsMap{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    inrtroduction(){
        if(this.constructor === RoomsMap){
            throw new Error("Already a map tile")
        }
    }
    changePlayer(player){
        if(this.constructor === RoomsMap){
            throw new Error("Already a map tile")
        }
    }

    availableMoves(){
        let moveActions= []
        if(tileExists(this.x+1,this.y)){
            moveActions.push(new MoveRight())
        }if(tileExist(this.x-1,this.y)){
            moveActions.push(new MoveLeft())
        }if(tileExist(this.x,this.y-1)){
            moveActions.push(new MoveUp())
        }if(tileExist(this.x,this.y+1)){
            moveActions.push(new MoveDown)
        }
        return moveActions
    }


    actionsAvailable(){
        let moves = this.availableMoves
        moves.push(new ViewInvetory())
        return moves
    }
}

class YellowBrickRoad extends