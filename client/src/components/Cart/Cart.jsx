import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'


const Cart = () => {

  const data = [
    {
        id:1,
        img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        title: "Skirt",
        desc: "desc lorem 23sgdfsdf",
        price:12
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        title: "Hat",
        desc: "desc lorem 23sgdfsdf",
        price:12
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        title: "Coat",
        desc: "desc lorem 23sgdfsdf",
        price:12
    },
    {
        id:4,
        img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        title: "Hat",
        desc: "desc lorem 23sgdfsdf",
        price:12
    }
]

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECHOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart