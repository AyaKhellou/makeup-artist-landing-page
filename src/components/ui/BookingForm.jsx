import { useForm, ValidationError } from '@formspree/react'
import services from "../../data/services"
import Input from "../ui/Input"
import formFields from "../../data/formFields"

export default function BookingForm({}){
    
    const [state, handleSubmit] = useForm("maqvblkr");
    return(
        <>
        {state.succeeded ? <p className="success-message">Thank you! Your booking request has been submitted.</p>: 
        <form onSubmit={handleSubmit}>
            {formFields.map(field => (
                <Input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    state={state}
                    label={field.label}
                />
            ))}
            <div className="select-box">
                <label htmlFor="service">Service</label>
                <select name="service" id="service">
                    {services.map(service => 
                        <option key={service.id} value={service.slug}>{service.title}</option>
                    )}
                </select>
                <ValidationError 
                prefix="Service" 
                field="service"
                errors={state.errors}
                />
            </div>
            <div className="input-box">
                <label htmlFor='description'>Tell me about your vision</label>
                <textarea name="description" id="description" placeholder='Inspiration, references, skin notes, questions...'></textarea>
                <ValidationError 
                prefix="Description" 
                field="description"
                errors={state.errors}
                />
            </div>
            <button className="cta" type="submit" disabled={state.submitting}>{state.submitting ? 'Sending...' : 'Send Booking Request'}</button>
        </form>
    }
    </>
    )
}