import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export function ScrollToTop () {
    const {pathName} = useLocation()
    console.log(pathName)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathName])

    return null
}