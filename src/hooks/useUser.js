import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
import registerService from "../services/register";
import userService from '../services/user';

export default function useUser() {
    const { jwt, setJWT } = useContext(Context)
    const [statusLogin, setStatusLogin] = useState({
        loading: false,
        error: false
    })
    const [userData, setUserData] = useState({})
    const login = useCallback(({ email, password }) => {
        setStatusLogin({ loading: true, error: false })
        loginService({ email, password })
            .then(jwt => {
                setStatusLogin({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(_ => {
                setStatusLogin({
                    loading: false,
                    error: true
                })
            }, [setStatusLogin])
    }, [setJWT])

    const signUp = useCallback(({ email, password, passwordConfirmation, name, profilePicture }) => {
        setStatusLogin({ loading: true, error: false })
        registerService({ email, password, passwordConfirmation, name, profilePicture })
            .then(jwt => {
                setStatusLogin({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(_ => {
                setStatusLogin({
                    loading: false,
                    error: true
                })
            }, [setStatusLogin])
    }, [setJWT]);

    const getData = useCallback(() => {
        userService(jwt).then(data => {
            setUserData(data)
        })
    }, [jwt, setUserData]);

    const logout = useCallback(() => {
        setJWT(null)
        localStorage.removeItem('token')
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoading: statusLogin.loading,
        hasError: statusLogin.error,
        userData,
        login,
        logout,
        signUp,
        getData,
    }
}