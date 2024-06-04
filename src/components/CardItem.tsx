import { CardProps } from "./Card"


interface CardItemProps {
    post: CardProps
}

const CardItem:React.FC<CardItemProps> = ({post}) => {
        console.log(post)
        console.log("post")
    return (
        <div>
                <h1>{post.title}</h1>
        </div>
    )
}

export default CardItem