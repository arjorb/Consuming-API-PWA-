

interface CardItemProps {
    post: any;
  }

const CardItem:React.FC<CardItemProps> = ({post}) => {
        console.log(post)
        console.log("post")
    return (
        <div>
                <h1>{post.title}</h1>
                <h1>Hello world</h1>
        </div>
    )
}

export default CardItem