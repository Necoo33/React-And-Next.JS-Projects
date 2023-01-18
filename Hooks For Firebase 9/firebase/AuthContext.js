import { createContext, useReducer, useEffect } from 'react'
import { firebaseAuthService } from './config'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// for apply this context to website you should open the "index.js" file which belongs to your boilerplate and surround the 
// "<App/>" tag with <AuthContextProvider></AuthContextProvider> tag.

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  };
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    // the useAuthContext hook returns these properties and also "dispatch()" function. So for auth actions you have to use
    // that things. If you want to learn which one is make what you can scroll to the below of the file.
    user: null,
    authIsReady: false
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(getAuth(), user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, []);

  console.log(state);
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}

// things which returning by this context and their benefits:

/* 

dispatch() - you can use that function to actually log in and log out to the users. For sample uses you can check out 
"useFirebaseAuthServices.js" file.

user - this property includes all information about users which you will create. If you want to call any information of user,
you should bind firebase properties to it, like ".uid" or ".photoURL" or ".displayName".

authIsReady - this property benefits for check if user is logged in or not. You can use that property on "App.js" file and bind it
to the browserRouter tag. Here is the sample use:

{authIsReady && <BrowserRouter>
  ...
</BrowserRouter>}
*/