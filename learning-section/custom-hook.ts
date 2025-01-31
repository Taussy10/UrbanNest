
import { useEffect, useState } from "react"
import { testing } from "~/appwrite/appwrite"


// so, this is basic setup: everything will work fine just execute the function 
export const useBasic = () =>{
      // 1. get the data
      useEffect(() => {
      // so , have to reseolve like this 
      const fetchProps2 = async() => {
        const result = await testing()
        setData(result)
      }
      fetchProps2()
      }, [])
    // 2. store the data 
    const [data, setData] = useState([])





    // 3. return the data for further use
   return data
    
}


// Advance: pass the params 
// whil calling just pass function
// console.log("custom :",useCustomHook(testing));
export const useCustomHook = (
    // testing will replace with this
 fn

) =>{
      // 1. get the data
      useEffect(() => {
      // so , have to reseolve like this 
      const fetchProps2 = async() => {
        // then testing will rplace with this 
        const result = await fn()
        setData(result)
      }
      fetchProps2()
      }, [])
    // 2. store the data 
    const [data, setData] = useState([])


    // 3. return the data for further use
   return data
    
}