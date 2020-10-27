import React, { useState } from 'react'

/**
 * Recieves the input of the search and returns the the search box with the search value.
 */
const Search = ({ getSubReddit }) => {
    const [text, setText] = useState('')
    
    const onChange = (subReddit) => {
        setText(subReddit)
        getSubReddit(subReddit)
    }

    return (
        <section className='centerDiv'>
            <form>
                <input
                    className='center'
                    type='text' 
                    placeholder='Search reddits' 
                    value={text}
                    onChange={ (event) => onChange(event.target.value) } 
                    autoFocus 
                />
            </form>
        </section>
    )
}

export default Search
