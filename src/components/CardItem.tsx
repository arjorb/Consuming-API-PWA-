import { CardProps } from "./Card"


interface CardItemProps {
    post: CardProps
}

const CardItem:React.FC<CardItemProps> = ({post}) => {
   
    return (
        <div className="min-w-72 md:max-w-72 bg-gray-100 my-2 p-3 rounded">
                <h1 className="text-sm font-semibold underline">{post.title.substring(0,30)}...</h1>
                <img src={post.thumbnailUrl} alt={post.title} />
        </div>
    )
}

export default CardItem