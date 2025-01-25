import {  createContext, useContext , useEffect , useState } from "react";
import { getCurrentUser } from "./appwrite";


// why start with capital letter ? cause we are writing jsx using it
export const AuthContext = createContext("")


const GlobalContext = ({children}) => {
    const [loggedIn, setloggedIn] = useState(false)
    const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true)

    useEffect(() => {
      getCurrentUser().
      then((response)=> {
       setloggedIn(true)
       setUser(response)
      }).catch(()=>{
        setloggedIn(false)
        setUser(null)
      }).finally(()=> {
        setLoading(false)
      })
    }, [])
    
  return (
   <AuthContext.Provider value={{loggedIn , setloggedIn , user , setUser ,loading , setLoading}}>
    {children}
   </AuthContext.Provider>
  )
}

export const useGlobalContext = () => {
    const context = useContext(AuthContext);
    if (!context)
      throw new Error("useGlobalContext must be used within a GlobalProvider");

    return context;
  };

export default GlobalContext




