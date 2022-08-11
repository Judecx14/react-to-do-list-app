import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
import registerService from "../services/register";

export default function useUser() {
    const { jwt, setJWT } = useContext(Context)
    const [statusLogin, setStatusLogin] = useState({
        loading: false,
        error: false
    })
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

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoading: statusLogin.loading,
        hasError: statusLogin.error,
        login,
        logout,
        signUp,
    }
}