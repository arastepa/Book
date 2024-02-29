import photo from '../../food.jpeg'
import Categories from '../Categories'

const Header = props => {
    return <>
        <img className="main-pic" src={photo}/>
        <Categories onFilter = {props.onFilter} />
    </>
}
export default Header