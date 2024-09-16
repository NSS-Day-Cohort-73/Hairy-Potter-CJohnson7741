import { usePottery } from "./potteryCatalogue.js"


// retrieve the pottery array from potteryCatalogue by invoking usePottery()
// set a varible for the HTML string
// iterate over the array and add the generated HTML to the HTML string then return the HTML string
export const PotteryList = () => {
    let potteryArray = usePottery()
    let potteryHTML = ""
    for(const pottery of potteryArray){
        potteryHTML += `
        <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${pottery.shape}</h2>

            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>

            <div class="pottery__price">
                Price is $${pottery.price}
            </div>
        </section>`
    }
    return potteryHTML
    }