import axios from "axios";
import { createContext, useState, useEffect } from "react";


const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const  [category, setCategory] = useState('general')
    const  [news, setNews] = useState([])
    const  [page, setPage] = useState(1)
    const  [totalNews, setTotalNews] = useState(1)

    useEffect(() => {
        const getData = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)
            setPage(1)
        }
        getData()
    }, [category])

    useEffect(() => {
        const getData = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`
            const {data} = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)
        }
        getData()
    }, [page])
    
    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, value) => {
        setPage(value)
    }

    return (
        <NewsContext.Provider
            value={{
                news,
                page,
                category,
                totalNews,
                handleChangeCategory,
                handleChangePage
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext