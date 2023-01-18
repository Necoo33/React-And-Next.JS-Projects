import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

// for using them, you should destructure only which you want and pass the infos which written on function's parameter.

export function useFirebaseAuthServices(){
    let [errorRegister, setErrorRegister] = useState(null);
    let [errorLogin, setErrorLogin] = useState(null);
    let [errorLogout, setErrorLogout] = useState(null);
    let { dispatch } = useAuthContext();

    async function register(email, password){
        setErrorRegister(null);

        await createUserWithEmailAndPassword(getAuth(), email, password).then(function(parameter){
            dispatch( { type: "LOGIN", payload: parameter.user } );
        }).catch(function(error){
            setErrorRegister(error.message);
        });

    }

    async function login(email, password){
        setErrorLogin(null)

        await signInWithEmailAndPassword(getAuth(), email, password).then(function(parameter){
            dispatch( { type: "LOGIN", payload: parameter.user } );
        }).catch(function(parameter){
            setErrorLogin(parameter.message);
        })
    }

    async function logout(){
        signOut(getAuth()).then(function(){
            dispatch( { type: "LOGOUT" } );
        }).catch(function(parameter){
            setErrorLogout(parameter.message);
        });
    }

    return { errorRegister, register, errorLogin, login, errorLogout, logout };
}