import './List.scss'
import Card from '../Card/Card'

const List = () => {

    const data = [
        {
            id:1,
            img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: "Skirt",
            oldPrice: 19,
            price:12
        },
        {
            id:2,
            img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: "Hat",
            oldPrice: 19,
            price:12
        },
        {
            id:3,
            img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: "Coat",
            oldPrice: 19,
            price:12
        },
        {
            id:4,
            img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            title: "Hat",
            oldPrice: 19,
            price:12
        }
    ]

  return (
    <div className="list">
        {data?.map(item => (
            <Card item={item} key={data?.id}/>
        ))}
    </div>
  )
}

export default List