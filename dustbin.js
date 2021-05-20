class Dustbin{
    constructor(x,y,w,h){
        var opt = {
            isStatic : true
        }
        this.width = w
        this.height = h
        this.body = Bodies.rectangle(x,y,w,h,opt)
        this.image = loadImage("images/dustbingreen.png")

        World.add(world,this.body)
    }

    display(){
            imageMode(CENTER)
            fill("red")
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}