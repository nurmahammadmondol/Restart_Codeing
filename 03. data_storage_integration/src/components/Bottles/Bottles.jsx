import { use } from "react"
import Bottle from "../Bottle/Bottle"





export default function Bottles({message}) {

    const BottlesData=use(message)
    // console.log(BottlesData)

    const handleAddToCart=()=>{
      console.log('Add cart')
    }
    const handleBuyNow=()=>{
      console.log('Buy Now')
    }

  return (
    <div>
       <div className="flex justify-between items-center p-2 my-5 bg-amber-400">
       <h3 className="font-bold "> Your Profile </h3>
       <div>
        <button className="border-2 p-2 rounded-xl mr-4">Add Cart = 0</button>
       <button className="border-2 p-2 rounded-xl">Buy = 0</button>
       </div>
       </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-[15px]">
          {
            BottlesData.map(bottle=><Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} handleBuyNow={handleBuyNow}> </Bottle>)
        }
        </div>

    </div>
  )
}
