import { Link } from "react-router-dom"


const ProductCard = ({name,quantity,price,desc,color,id,deleteProduct}) => {

  return (
    <div className="flex flex-col items-center border rounded-lg shadow p-4 ">        
      <div className="text-xl capitalize">{name}</div>
      <div className="text-balance text-gray-600">{desc}</div>
      <div>
      <div>Quantity:{quantity}</div>
      <h3>${price}</h3>

      </div>
      <div className="flex items-center gap-3">

      Color: 
      <div style={{ backgroundColor: color || 'transparent' }} className="inline-flex w-10  ">{color} </div>
      </div>
      <div className="flex items-center justify-between gap-3">

      <Link to={`/update/${id}`}>
      
      <button className="bg-green-600 rounded p-1 mt-4">Update</button>
      </Link>
      <button 
        onClick={() => deleteProduct(id)} 
        className="bg-red-500 text-white p-1 rounded mt-4">
        Delete Product
      </button>
      </div>
    </div>
  )
}

export default ProductCard
