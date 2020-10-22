import React from 'react'
import PostItem from './PostItem'

const PostGrid = ({ items, isLoading }) => {
    return isLoading ? (<h4>Loading.....</h4>) : <section>
        {items.map(item =>(
            <PostItem item={item}></PostItem>
        ))}
    </section>
}
export default PostGrid