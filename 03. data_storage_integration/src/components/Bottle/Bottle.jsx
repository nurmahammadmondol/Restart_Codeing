

export default function Bottle({bottle, handleAddToCart, handleBuyNow}) {

  const {name , price, stock, ratings, img, id}=bottle;


  return (
    <div className="border-2 ">
      <img className="w-full h-[250px] " src={img} alt="" />
     <div className="p-5">
       <h3 className="font-bold text-2xl">{name}</h3>
      <p>Price : {price}</p>
      <p>Stock : {stock}</p>
      <p>Ratings : {ratings}⭐</p>

      <div className="flex gap-5 mt-4">
        <button onClick={()=>handleAddToCart(id)}  className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition">
        Add to cart
      </button>

      <button onClick={()=>handleBuyNow(id)} className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
       Buy Now
      </button>
      </div>
     </div>
    </div>
  )
}
