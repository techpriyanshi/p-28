class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 40
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    fly(){
        this.launcher.bodyA=null; //attaching nothing to the launcher
    }

    display(){
        if(this.launcher.bodyA){   // if there is a body 
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
