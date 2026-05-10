export default function Feature({icon, title, description}){
    return(
        <li className="feature">
            <img className="feature-icon" src={icon} loading="lazy"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}