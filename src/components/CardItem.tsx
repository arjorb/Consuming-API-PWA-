import { CardProps } from "./Card"


interface CardItemProps {
    post: CardProps
}

const CardItem:React.FC<CardItemProps> = ({post}) => {
        console.log(post)
        console.log("post")
    return (
        <div className="w-60 bg-gray-100 my-2 p-2">
                <h1>{post.title}</h1>
        </div>
    )
}

export default CardItem