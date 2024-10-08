// Imports go first
import { firePottery } from "./kiln.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./potteryCatalogue.js"
import { usePottery } from "./potteryCatalogue.js"
import { PotteryList } from "./potteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("cylinder", 4 , 5 )
let vase = makePottery("trumpet vase", 6, 15)
let pot = makePottery("round", 7, 5)
let bowl = makePottery("bowl", 5, 3)
let waterCarrier = makePottery("cylinder", 15, 60)

// Fire each piece of pottery in the kiln
firePottery(mug, 2)
firePottery(vase, 2600)
firePottery(pot, 2200)
firePottery(bowl, 0)
firePottery(waterCarrier, 2000)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(vase)
toSellOrNotToSell(pot)
toSellOrNotToSell(bowl)
toSellOrNotToSell(waterCarrier)

let objectsToSell = usePottery()

console.log(objectsToSell)
// Invoke the component function that renders the HTML list
let potteryDOM = document.getElementById("potteryArticle")

let potteryHTML = PotteryList()

potteryDOM.innerHTML = potteryHTML



