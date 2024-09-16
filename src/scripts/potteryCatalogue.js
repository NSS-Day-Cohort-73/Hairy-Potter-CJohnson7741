let potteryToSellArray = []

export const toSellOrNotToSell = (object) =>{
    //if the object is NOT cracked set a price based on weight and push it to the potteryToSellArray
    if(object.cracked === false){
        if(object.weight >= 6){
            object.price = 40
    }   else{
            object.price = 20
    }
    potteryToSellArray.push(object)
}
return object
}

// get a copy of the potteryToSellArray and return it
export const usePottery = () => {
    let returnArray = potteryToSellArray.slice()
    return returnArray
}