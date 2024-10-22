import{ useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const CreateComponent = () => {
  const [product, setProduct] = useState({
    name: '',
    color: '',
    price: '',
    description: '',
    quantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleReset=(e)=>{
e.preventDefault();
setProduct({
        name: '',
        color: '',
        price: '',
        description: '',
        quantity: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://crudcrud.com/api/d310a7283ef147b0a3006ffebd3f9606/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Product succesfully created', {
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
        console.log('Product created:', data);
  
      } else {
        toast.error('Failed to create product', {
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
        console.error('Failed to create product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=' bg-blue-200 max-w-[50%] mx-auto py-10 rounded-md px-12'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
            placeholder='Product name'
            className='w-full border py-1'
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleInputChange}
             placeholder='Product color'
            required
            className='w-full border py-1'
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
             placeholder='Product price'
            required
              className='w-full border py-1'
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
             placeholder='Product description'
              className='w-full border py-1 h-24'
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            required 
            placeholder='0'
              className='w-full border py-1'
          />
        </label>
        <br />
        <div className='flex justify-between'>

        <button type="submit" className=' bg-blue-500 p-2 rounded  text-center mt-4 self-center' >Create Product</button>
        <button type="reset" className='bg-green-500 p-2 rounded mt-4 ' onClick={handleReset} >Reset</button>
        </div>
      </form>
    </div>
  );
};

export default CreateComponent;

