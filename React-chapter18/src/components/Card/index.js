import CardItem from '../CardItem'

const Card = props => {
    return <div className='wide'>
        <p className="total">Total - {props.total}AMD</p>
        <button className='del-btn' onClick={()=>props.onClear()}>clear all</button>
        {
            props.items.map(elm => {
                return <CardItem
                    key = {elm.id}
                    item = {elm}
                    {...props}
                />
            })
        }
    </div>
}
export default Card