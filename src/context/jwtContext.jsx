import {useState, createContext} from "react"

export const JwtContext = createContext()

export const JwtContextProvider = ({children}) => {
    const [jwt, setJwt] = useState (() => {
        const savedJwt = localStorage.getItem("token")
        return savedJwt || null;
    })


const [mascota, setMascota] = useState (() => {
    const savedMascota = localStorage.getItem("nick")
    const initialValue = JSON.parse(savedMascota)
    return initialValue || null
})

const logout = () => {
    setMascota(null)
    setJwt(null)
    localStorage.removeItem("nick")
    localStorage.removeItem("token")
}

return (<JwtContext.Provider value = {{jwt, setJwt, mascota, setMascota, logout}}>
        {children}
        </JwtContext.Provider>)

}