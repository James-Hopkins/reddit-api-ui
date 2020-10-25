import React, { useState } from 'react'

const Next = ({ getOffset}) => {
    const [offset, setOffset] = useState(10)
    const magicMax = 15
    
    const next = (offset) => {
        if (Number(offset) < magicMax )
            setOffset(Number(offset) + 10)
            getOffset(offset)
    }

    return (
        <section>
            <button className='myButton' onClick={ () => next(offset) }>
                Next 
            </button>
        </section>
    )
}

export default Next
