let idCounter = 0

export const makePottery = (shape, weight, height) => {
    // set a counter for the pottery ID value
    // increment the id counter value and return the shape, size, height, and idCounter values to create an object
    
    idCounter ++
    return {shape, weight, height, idCounter}
        
}