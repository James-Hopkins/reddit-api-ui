import React from 'react'

const PostItem = ({ item }) => {
    return (
        <div>
            <h1>{item.data.title}</h1>
            <h4>{item.data.link_flair_text}</h4>
            <h8>{item.data.author}</h8>
            <h10>{item.data.url}</h10>
        </div>
    )
}

export default PostItem