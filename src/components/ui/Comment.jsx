import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { CiStar } from "react-icons/ci";

export default function Comment({text, name, role, rating}){
    const initials = name.split(' ').map(word=>word[0]).join('.')
    return(
        <div className="comment">
            <div className="rating">
                {Array.from({ length: rating }).map((star, i) =>
                    <CiStar className="star-icon" key={i} />
                )}
            </div>
            <blockquote className="text">
                <RiDoubleQuotesL aria-hidden="true" /> 
                {text}
                <RiDoubleQuotesR aria-hidden="true" />
            </blockquote>
            <footer className="client">
                <div className="image">{initials}</div>
                <div className="info">
                    <span className="name">{name}</span>
                    <span className="role">{role}</span>
                </div>
            </footer>
        </div>
    )
}