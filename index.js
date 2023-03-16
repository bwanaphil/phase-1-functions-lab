// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    const hqInBlocks = 42
    if (blocks>hqInBlocks){
        return blocks-hqInBlocks
    }
    else{
        return hqInBlocks-blocks
    }
}
function distanceFromHqInFeet(feet){
    const x = distanceFromHqInBlocks(feet) * 264
    return x
}
function distanceTravelledInFeet(start,destination){
    let y 
    if (destination>start){
        y = (destination-start)*264
        return y 
    }
   else{
       y = (start-destination)*264
        return y
    }
}
function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start,destination)
        let farePrice
        let distance=distanceTravelledInFeet(start,destination)

        if(distance<400){
            farePrice = 0
        }
        else if(distance >=401 && distance <=2000){
            farePrice = (distance-400) * 0.02
        }
        else if(distance >= 2501){
            farePrice = "cannot travel that far"
        }
        else if(distance > 2000 && distance<2500){
            farePrice = 25
        }
        return farePrice
    }






