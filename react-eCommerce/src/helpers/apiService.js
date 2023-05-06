import { json, redirect } from "react-router-dom"
// import { sleep } from "./sleep"

export const newsletterSub = async (subscriberData, setSubscriber) => {
    try {
        console.log(subscriberData)
        console.log(setSubscriber)
      
      const res = await fetch('http://localhost:3000/add-subscriber', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(subscriberData)
      })
  
      if(res.ok) {
        const data = await res.json()
        setSubscriber(data)
        return redirect('/')
      }
      else {
        const errorMessage = await res.text()
        return json({ message: errorMessage })
      }
  
    } catch (error) {
      console.log(error)
      return json({ message: error.response.data })
    }
  }
  

// export const createPost = async (post) => {
//   await sleep(1000)
//   try {
    
//     const res = await fetch('http://localhost:3000/posts', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(post)
//     })

//     if(res.ok) {
//       return redirect('/')
//     }
//     else {
//       throw new Response(res.statusText, { status: res.status })
//     }

//   } catch (error) {
//     console.log(error)
//     throw new Error(error.response.data)
//   }
// }

// export const login = async (userData, setUser) => {
//   try {
    
//     const res = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })

//     if(res.ok) {
//       const data = await res.json()
//       setUser(data)
//       return redirect('/')
//     }
//     else {
//       const errorMessage = await res.text()
//       return json({ message: errorMessage })
//     }

//   } catch (error) {
//     console.log(error)
//     return json({ message: error.response.data })
//   }
// }


// export const register = async (userData, setUser) => {
//   try {
    
//     const res = await fetch('http://localhost:3000/register', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })

//     if(res.ok) {
//       const data = await res.json()
//       setUser(data)
//       return redirect('/')
//     }
//     else {
//       const errorMessage = await res.text()
//       return json({ message: errorMessage })
//     }

//   } catch (error) {
//     console.log(error)
//     return json({ message: error.response.data })
//   }
// }