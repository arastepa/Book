import { useState } from "react";
import ProductItem from "../ProductItem"
const ProductList = props => {
    const [prods, setProds] = useState(props.products);
    const handleSortChange = (e) => {
        if (e.target.value !== "") {
            const sorted = [...props.products].sort((a, b) => {
                return e.target.value === 'asc' ? a.price - b.price : b.price - a.price;
            });
            setProds(sorted);
        }
    };
    return (
    <div>
        <select id="sortSelect" onChange={handleSortChange}>
            <option value="">-- Select Sort --</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <div className="row">
            {
                prods.map(elm => {
                    return <ProductItem
                    key={elm.id}
                    product = {elm}
                    onMove = {props.onMove}
                    />
                })
            }
        </div>
    </div>
    )
}
export default ProductList