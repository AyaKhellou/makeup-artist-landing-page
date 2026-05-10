import { BsStars } from "react-icons/bs"

export default function BookingDetail({title , description}){
    return(
        <div className="detail">
            <BsStars size={30} color="#B67558" />
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}