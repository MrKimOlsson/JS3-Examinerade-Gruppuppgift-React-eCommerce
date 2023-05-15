
const getAllAsync = async () => {
    const res = await fetch('http://localhost:9999/api/product')
    if(!res.ok) throw new Error('Something went wrong')
    return res.json()
  }
  
  const getByIdAsync = async (id) => {
    const res = await fetch('http://localhost:9999/api/product/' + id)
    console.log(id)
    if(!res.ok) throw new Error('Something went wrong')
    return res.json()
  }
  
  
  
  
  
  const productsService = {
    getAllAsync,
    getByIdAsync
  }
  
  export default productsService