import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialSttate = {
    logged: false,
}

const init = ()=>{
  const user = JSON.parse(localStorage.getItem('user'))
  return{
    logged: !!user,
    user: user,
  }
}
export const AuthProvider = ({ children }) => {

    const [state, dispach] = useReducer(authReducer, initialSttate,init)

    const login = async(name = 'luis Mtz') => {
      const user = {
        id: '1af',
        name
      }
      const action = {
        type : types.login,
        payload: user
      }
      localStorage.setItem('user',JSON.stringify(user))
      
      dispach(action)
    }

    const logout = async ()=>{
      localStorage.removeItem('user')
      const action= { type: types.logout }
      
      dispach(action)
    }


    
  return (
    <AuthContext.Provider value={{
      login: login,
      logout:logout,
      ...state

    }}>
        { children }
    </AuthContext.Provider>
  )
}
