const Categories = props => {
    const categories = ["All", "Fruits", "Pizza", "Burger", "Coffee", "Drink"]
    return <>
        <ul className="horizontal">
            {
                categories.map((elm,i) => {
                    return <li onClick={() => props.onFilter(elm)} key={i}>{elm}</li>
                })
            }
        </ul>
    </>
}
export default Categories