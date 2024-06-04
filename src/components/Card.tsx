import { useEffect, useState } from "react";
import CardItem from "./CardItem";

export interface CardProps {
    userId: number;
    title: string;
    body: string;
}

function Card() {
    const [posts, setPost] = useState([])

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const renderPost = posts.map((post:CardProps) => <CardItem key={post.userId} post={post} />)
  return (
    <div className="flex flex-wrap justify-between">
    {renderPost}
    </div>
  );
}

export default Card;
