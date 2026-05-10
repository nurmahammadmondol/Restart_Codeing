import { use, useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle"
import { addBottleItemsFromLocalStorage, getBottlesFromLocalStorage } from "../LocalStore/LocalStorage"





export default function Bottles({message, handleBuyNow, buyNow}) {

    const BottlesData=use(message)
    // console.log(BottlesData)

    const [addCart, setAddCart]=useState([]);
    
  



    const handleAddToCart=(id)=>{
      console.log('Add cart', id)
      addBottleItemsFromLocalStorage(id)
    }

   


    useEffect(()=>{

      const FindItems=[];

      const data=getBottlesFromLocalStorage();
      for(const id of data){
        // console.log(id)

        const CheckItems= BottlesData.find(item=>item.id===id)
        // console.log(CheckItems)
        FindItems.push(CheckItems)
      };

      setAddCart(FindItems);

    },[BottlesData])

  return (
    <div>
       <div className="flex justify-between items-center p-2 my-5 bg-amber-400">
       <h3 className="font-bold "> Your Profile </h3>
       <div>
        <button className="border-2 p-2 rounded-xl mr-4">Add Cart = {addCart.length}</button>
       <button className="border-2 p-2 rounded-xl">Buy = {buyNow.length}</button>
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
