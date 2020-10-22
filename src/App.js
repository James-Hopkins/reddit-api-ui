import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './ui/Header'
import Search from './ui/Search'
import PostGrid from './posts/PostGrid'

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [subReddit, setSubReddit] = useState('reactjs')
    
    useEffect(() => {        
        const fetchItems = async () => {
            const result = await axios(`https://www.reddit.com/r/${subReddit}.json`)
            console.log(result.data.data.children)
            
            setItems(result.data.data.children)
            setIsLoading(false)
        }

        fetchItems()

    }, [subReddit])
    

    return (
        <div className='container'>
            <Header />
            <Search getSubReddit={(subReddit) => setSubReddit(subReddit)}/>
            <PostGrid isLoading={isLoading} items={items} />
        </div>
    )
}

export default App