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
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderPost = posts.map((post:CardProps) => <CardItem key={post.userId} post={post} />)
  return (
    <div className="flex flex-wrap justify-between">
    {renderPost}
    </div>
  );
}

export default Card;
