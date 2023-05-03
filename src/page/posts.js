import { useState, useEffect } from "react"
import '../App.css' //დროებით

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
                posts.map((post,i)=>(
                    <div className="post" key={i}> 
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts