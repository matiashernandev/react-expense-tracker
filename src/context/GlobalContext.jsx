import { useReducer } from "react"
import { useContext } from "react"
import { createContext } from "react"
import AppReducer from "./AppReducer"

const Context = createContext()

const initialState = {
  transactions: [],
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <Context.Provider value={{ transactions: state.transactions }}>
      {children}
    </Context.Provider>
  )
}

export function useGlobalState() {
  const context = useContext(Context)
  return context
}