import { Suspense, use, useEffect, useState } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'
import { addBuyNowItem, getBuyNowItems } from './components/LocalStore/LocalStorage'

const loadBottlesData=fetch('https://raw.githubusercontent.com/nurmahammadmondol/Working-json-data/refs/heads/main/PH-Team_Bottles.json')
                      .then(res=>res.json())



                      




                     

function App() {

  const data=use(loadBottlesData)

  const [buyNow, setBuyNow]=useState([])
 


   const handleBuyNow=(id)=>{
    addBuyNowItem(id)
      // console.log('Buy Now', id)
    }

    useEffect(()=>{

      const buyItems=[]



      const loadBuyItems=getBuyNowItems()

      for(const id of loadBuyItems){
  
      const findBuyBottle = data.find(item => item.id === id)

      if(findBuyBottle){
        buyItems.push(findBuyBottle)
      }
      };

      setBuyNow(buyItems);

    },[data])

  return (
    <div className='w-11/12 mx-auto'>
     
      <h2 className=" text-center text-4xl font-bold">Data Storage Integration</h2>
      <Suspense fallback={<h1 className='text-center text-red-600 align-middle text-5xl'>Bottles Data Loading.....?</h1>}>
        <Bottles message={loadBottlesData} buyNow={buyNow} handleBuyNow={handleBuyNow}></Bottles>
      </Suspense>


    </div>
  )
}

export default App
