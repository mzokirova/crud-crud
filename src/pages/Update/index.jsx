import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const Update = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://crudcrud.com/api/d310a7283ef147b0a3006ffebd3f9606/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setColor(res.color);
        setPrice(res.price);
        setDesc(res.description);
        setQuantity(res.quantity);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        toast.error('Failed to fetch product data');
      });
  }, [id]);

  const updateProducts = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://crudcrud.com/api/d310a7283ef147b0a3006ffebd3f9606/products/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            color,
            price: parseFloat(price),
            description: desc,
            quantity: parseInt(quantity),
          }),
        }
      );

      if (response.ok) {
        toast.success('Product successfully updated', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        console.log('Product updated:');
      } else {
        throw new Error('Failed to update product');
      }
    } catch (error) {
      toast.error('Failed to update product', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="mx-auto container mt-8">
      <h2 className='text-xl text-center'>Update Product</h2>
      <form onSubmit={updateProducts} className='flex flex-col '>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Product name"
            className="w-full border py-1"
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Product color"
            required
            className="w-full border py-1"
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product price"
            required
            className="w-full border py-1"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
            placeholder="Product description"
            className="w-full border py-1 h-24"
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            placeholder="0"
            className="w-full border py-1"
          />
        </label>
        <br />
        <div className="flex justify-between">
          <button type="submit" className="bg-green-500 p-2 rounded mt-4">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
