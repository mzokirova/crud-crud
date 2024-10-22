import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import { Bounce, toast } from "react-toastify";

const HomeComponent = () => {
    const [product,setProduct]=useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://crudcrud.com/api/d310a7283ef147b0a3006ffebd3f9606/products');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
    
            const data = await response.json();
            console.log(data)
            setProduct(data);
          } catch (error) {
            toast.error(' Failed to fetch!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
          }
        };
    
        fetchProducts();
      }, []);


      const deleteProduct = async (id) => {
        try {
          const response = await fetch(`https://crudcrud.com/api/d310a7283ef147b0a3006ffebd3f9606/products/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            setProduct((prevProducts) => prevProducts.filter((product) => product._id !== id));
            toast.success('Product successfully deleted!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          } else {
            throw new Error('Failed to delete product');
          }
        } catch (error) {
          toast.error('Failed to delete product!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      };
    
  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-4">
      {product.map((item,index)=>(
        <ProductCard key={index}
            
                    name={item.name}
                     desc={item.description}
                    quantity={item.quantity}
                    color={item.color}
                    price={item.price}
                    id={item._id}
                    deleteProduct={deleteProduct}/>
      ))}
     
    </div>
  )
}

export default HomeComponent
