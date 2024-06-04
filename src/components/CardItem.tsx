import { useEffect, useState } from "react"


function CardItem() {
        const [post, setPost] = useState({}) // Update initial state to empty object

        useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => setPost(data))
        }, [])
        console.log(post)
    return (
        <div>
                <h1>Hello</h1>
        </div>
    )
}

export default CardItem