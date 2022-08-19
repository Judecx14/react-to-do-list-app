import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
    const [jwt, setJWT] = useState(() => {
        const token = localStorage.getItem("token");
        if (token) return token;
    })
    return (
        <Context.Provider value={{jwt, setJWT}}>
            {children}
        </Context.Provider>
    )
}


export default Context