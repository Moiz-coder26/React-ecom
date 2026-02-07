import responseData from '../Pages/CreateNewProduct.jsx';
export async function getProducts(id = null) {
  try {
    const url = `https://fakestoreapi.com/products${id ? `/${id}` : ''}`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`)
    return await res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
export async function createNewData (formData) {
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