import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './ui/Header'
import Search from './ui/Search'
import Next from './ui/Next'
import Previous from './ui/Previous'
import PostGrid from './posts/PostGrid'

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [subReddit, setSubReddit] = useState('reactjs')
    const [offset, setOffset] = useState(0)
    const limit = 10
    
    useEffect(() => {        
        const fetchItems = async () => {
            const result = await axios(`https://www.reddit.com/r/${subReddit}.json`)

            console.log(offset)
            setItems(result.data.data.children.slice(Number(offset), Number(offset) + limit))
            setIsLoading(false)
        }

        fetchItems()

    }, [subReddit, offset])
    

    return (
        <div className='container'>
            <Header />
            <Search getSubReddit={(subReddit) => setSubReddit(subReddit)}/>
            <PostGrid isLoading={isLoading} items={items} />
            <Next getOffset={(offset) => setOffset(offset)} />
            <Previous getOffset={(offset) => setOffset(offset)} />
        </div>
    )
}

export default App