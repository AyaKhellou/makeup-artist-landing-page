import { ValidationError } from '@formspree/react'

export default function Input({name ,type ,placeholder ,label,state}){
    return(
        <div className="input-box">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} />
            <ValidationError
            prefix={name[0].toUpperCase() + name.slice(1)}
            field={name}
            errors={state.errors}
            />
        </div>
    )
}