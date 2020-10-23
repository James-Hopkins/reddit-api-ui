import React, { useState } from 'react'

const Search = ({ getSubReddit }) => {
    const [text, setText] = useState('')
    
    const onChange = (subReddit) => {
        setText(subReddit)
        getSubReddit(subReddit)
    }

    return (
        <section>
            <form>
                <input
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
