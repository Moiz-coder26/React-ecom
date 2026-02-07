import React, { useState } from 'react'

export default function CreateNewProduct({products,setProducts}) {
 const createnewdata = async (formData) => {
    let option = {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
 }
    const response = await fetch('https://fakestoreapi.com/products', option)
    const data = await response.json()
    return data
  }

   const mainform = async () => {
    let data= await createnewdata(form);
    console.log('Created Product ->', data);
    return data;
   }
    const [form, setForm] = useState({
      id: '',
      title: '',
      category: '',
      description: '',
      price: '',
      image: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
        setForm(prevForm => ({
        ...prevForm,
        image: URL.createObjectURL(file)
      }));
    };

    const handleSubmit = async (e) =>  {
      e.preventDefault();
      setLoading(true);
      setError(null);
      try {
        const newProduct = await mainform();
        setProducts([...products, newProduct]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Create New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm">ID</label>
          <input name="id" value={form.id} onChange={handleChange} className="w-full h-8 border border-black-300 rounded" />
        </div>

        <div>
          <label className="block text-sm">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full h-8 border border-black-300 rounded" />
        </div>

        <div>
          <label className="block text-sm">Category</label>
          <input name="category" value={form.category} onChange={handleChange} className="w-full h-8 border border-black-300 rounded" />
        </div>

        <div>
          <label className="block text-sm">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full h-18 border border-black-300 rounded" />
        </div>

        <div>
          <label className="block text-sm">Price</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full h-8 border border-black-300 rounded" />
        </div>

        <div>
          <label className="block text-sm">Image</label>
          <input name="image" type="file" className='bg-gray-300 w-50' accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white">Create</button>
        </div>
      </form>
      <div className="mt-6">
        {loading && <p>Creating product...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
      </div>
    </div>
  )
}
