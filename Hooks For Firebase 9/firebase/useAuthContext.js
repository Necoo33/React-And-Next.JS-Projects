import { AuthContext } from "./AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  // don't forget, this variable returns "dispatch()" function and "user" && "authIsReady" properties. For their benefits check out the
  // context file.
  return context
}