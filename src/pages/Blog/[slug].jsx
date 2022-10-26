import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {fakeData} from '../../data'

function Single() {
    const {slug} = useParams()
    const [post , setPost] = useState(null);
    useEffect(() => {
        const singlePost = fakeData.find(posts => posts.slug === slug)
        if(singlePost) {
            setPost(singlePost)
        }
    }, [slug])

  return (
    <div>
        {post? (
            <div>{post.title}</div>
        ) : (
        <div>
            Post Not Found
        </div>)}
    </div>
  )
}

export default Single