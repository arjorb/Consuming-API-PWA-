import { useEffect, useState } from "react";
import CardItem from "./CardItem";

function Card() {
    const [posts, setPost] = useState({}) // Update initial state to empty object

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
  return (
    <>
      <CardItem posts />
    </>
  );
}

export default Card;
