import testimonials from '../../data/testimonials'
import Comment from '../ui/Comment'
import SectionHeader from '../ui/SectionHeader'

export default function Testimonials(){
    return(
        <section className="testimonials" id="testimonials">
            <SectionHeader>What they're saying</SectionHeader>
            <div className="comments">
                {testimonials.map(testimonial => (
                    <Comment
                        key={testimonial.name}
                        text={testimonial.text}
                        name={testimonial.name}
                        role={testimonial.role}
                        rating={testimonial.rating}
                    />
                ))}
            </div>
        </section>
    )
}
