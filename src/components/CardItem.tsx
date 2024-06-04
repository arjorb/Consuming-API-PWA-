

interface CardItemProps {
    posts: any;
  }

const CardItem:React.FC<CardItemProps> = ({posts}) => {
        console.log(posts)
    return (
        <div>
                <h1>{posts.title}</h1>
        </div>
    )
}

export default CardItem