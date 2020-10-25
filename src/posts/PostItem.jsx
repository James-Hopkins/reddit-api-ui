import React from 'react'

const PostItem = ({ item }) => {
    return (
        <div className="boxes">
            <a href={item.data.url}>
                <div>
                    <h3>{item.data.title}</h3>
                    <h6>{item.data.link_flair_text}</h6>
                    <h9>{item.data.author}</h9>
                </div>
            </a>
        </div>
    )
}

export default PostItem