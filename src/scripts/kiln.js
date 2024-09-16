export const firePottery = (object, temperature) => {
    // create and set a "fired" property to true
    object.fired = true
    
    // check if the temperature of the kiln was above 2200 degrees
    // if yes create and set the cracked property to true if no set it to false
    // return the object with its new properties
    if (temperature > 2200){
        object.cracked = true
    } else{
        object.cracked = false
    }
    return object
}