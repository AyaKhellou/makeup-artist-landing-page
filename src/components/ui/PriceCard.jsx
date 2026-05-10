export default function PriceCard({title, description, price, features}){
    return(
        <div className="price-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="price"><span>{price}$</span> / session</div>
            <div className="features">
                <h4>INCLUDES</h4>
                <ul>{features.map((feature, i)=> <li key={i}>{feature}</li>)}
                </ul>
            </div>
        </div>
    )
}