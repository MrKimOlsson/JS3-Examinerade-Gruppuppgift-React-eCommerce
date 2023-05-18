
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

//   const getByIdAsync = async (id) => {
//     const res = await fetch('http://localhost:9999/api/product/' + id)
//     console.log(id)
//     if(!res.ok) throw new Error('Something went wrong')
//     let data = res
//     const products = []
//     data.forEach(product => {
//       products.push({id: product.id, ...product.data()})
    
//   })
//   return products
// }
  

  
  
  
  const productsService = {
    getAllAsync,
    getByIdAsync
  }
  
  export default productsService