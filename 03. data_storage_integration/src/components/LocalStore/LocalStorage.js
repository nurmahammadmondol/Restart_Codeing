// Add TO Cart :

const getBottlesFromLocalStorage=()=>{
    const StoreData= localStorage.getItem('BottlesID')
   if(StoreData){
    const Bottles_ID= JSON.parse(StoreData)
    return Bottles_ID
   }
   return []
}

const saveItems=(bottles)=>{
  const cartStringfy=JSON.stringify(bottles)
  localStorage.setItem('BottlesID', cartStringfy)
}

const addBottleItemsFromLocalStorage=(id)=>{
    const cart=getBottlesFromLocalStorage()
    const newCart=[...cart, id]

    saveItems(newCart)
}



// Buy Now : 

const getBuyNowItems=()=>{
  const Data=localStorage.getItem('BuyBottles')
  if(Data){
    const BuyBottleId=JSON.parse(Data)
    return BuyBottleId;

  }
  return []
}

const addBuyNowItem=(id)=>{
  const checkItem=getBuyNowItems();
  const newItems=[...checkItem, id];

  const DataStringfy=JSON.stringify(newItems);
  localStorage.setItem('BuyBottles', DataStringfy)
}



export {
  // Cart : 
  getBottlesFromLocalStorage, 
  addBottleItemsFromLocalStorage,

  // Buy :
  getBuyNowItems,
  addBuyNowItem
}