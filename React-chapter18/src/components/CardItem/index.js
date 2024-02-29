const CardItem = (props) => {
    const product = props.item
    return <div className={`${product.price > 2000 ? "bg" : ""} "card-item" `}>
        <p className="title">{product.name}</p>
        <p>quantity - {product.quantity}</p>
        <p className="subtotal">subtotal - {product.price*product.quantity}AMD</p>
        <button onClick={() => props.onQuantityUp(product)} >+</button>
        <button onClick={() => props.onQuantityDown(product)}>-</button>
        <button onClick={() => props.onDelete(product)} className="del-btn">delete</button>
    </div>
}

export default CardItem