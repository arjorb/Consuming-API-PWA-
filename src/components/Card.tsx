import { useEffect, useState } from "react";
import CardItem from "./CardItem";

function Card() {
    const [posts, setPost] = useState([])

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const renderPost = posts.map((post: any) => <CardItem key={post.id} post={post} />)
  return (
    <>
    {renderPost}
    </>
  );
}

export default Card;
