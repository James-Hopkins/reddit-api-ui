import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './ui/Header'
import Search from './ui/Search'
import PostGrid from './posts/PostGrid'
import './css/MainGrid.css';
import './css/Header.css';
import './css/Search.css';
import './css/PostGrid.css';
import './css/PostItems.css';
import './css/Buttons.css';
import './css/Footer.css';
import Footer from './ui/Footer'



const App = () => {
    const [items, setItems] = useState([])
    const [statefulIsLoading, setIsLoading] = useState(true)
    const [statefulSubReddit, setSubReddit] = useState('reactjs')
    const [statefulOffset, setStatefulOffset] = useState(0)
    const limit = 10
    
    useEffect(() => {        
        const fetchItems = async () => {
            const result = await axios(`https://www.reddit.com/r/${statefulSubReddit}.json`)

            console.log(statefulOffset)
            setItems(result.data.data.children.slice(Number(statefulOffset), Number(statefulOffset) + limit))
            setIsLoading(false)
        }

        fetchItems()

    }, [statefulSubReddit, statefulOffset])

    function next(offset, max) {
        if (offset < max )
            setStatefulOffset(offset + 10)
    }

    function previous(offset, min) {
        if (offset > min )
            setStatefulOffset(offset - 10)
    }

    return (
        <div className='grid-container'>
            <Header />
            <main className='main'>
                <Search getSubReddit={(subReddit) => setSubReddit(subReddit)} />
                <PostGrid isLoading={statefulIsLoading} items={items} />
            </main>
            <section className='next'>
                <button className='myButton' onClick={ () => next(statefulOffset, 15) }>
                    Next 
                </button>
            </section>
            <section className='previous'>
                <button className='myButton' onClick={ () => previous(statefulOffset, 0) }>
                    previous 
                </button>
            </section>
            <Footer />
        </div>
    )
}

export default App