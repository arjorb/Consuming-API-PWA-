import { CardProps } from "./Card"


interface CardItemProps {
    post: CardProps
}

const CardItem:React.FC<CardItemProps> = ({post}) => {
        console.log(post)
        console.log("post")
    return (
        <div className="w-72 bg-gray-100 my-2 p-3 rounded">
                <h1 className=" font-semibold">{post.title.substring(0,30)}...</h1>
                <p className="my-4 text-sm">{post.body}</p>
        </div>
    )
}

export default CardItem