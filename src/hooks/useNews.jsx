import { useContext } from "react"
import NewsContext from "../NewsProvider"


const useNews = () => {
    return useContext(NewsContext)
}

export default useNews