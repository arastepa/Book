const ProductItem = props => {
    const product=props.product
    return <div className="product-item">
        <img src={require("../../" + product.photo)}/>
        <p>{product.name}</p>
        <p>{product.price} AMD</p>
        <button onClick={() => props.onMove(product)}>Order</button>
    </div>
}
export default ProductItem