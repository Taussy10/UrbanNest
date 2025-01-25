import {  createContext } from "react";


// why start with capital letter ? cause we are writing jsx using it
export const AuthContext = createContext("")


const GlobalContext = ({children}) => {
  return (
   <AuthContext.Provider value="Chuah">
    {children}
   </AuthContext.Provider>
  )
}

export default GlobalContext




