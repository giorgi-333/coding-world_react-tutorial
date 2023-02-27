import { useState, useEffect } from "react"

function Posts() {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    },[])

    return (
        <div className="posts"> 
            {
                posts.map((post)=>(
                    <div className="post"> 
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts