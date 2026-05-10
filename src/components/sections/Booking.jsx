import SectionHeader from "../ui/SectionHeader"
import BookingDetail from "../ui/BookingDetail"
import BookingForm from "../ui/BookingForm"

export default function Booking(){
    return(
        <section className="booking-section" id="booking">
            <div className="info">
                <SectionHeader description="Fill in the form and I'll reach out within 24 hours to confirm 
                    your date and share a personalized quote.">
                    Ready to <span>glow ?</span>
                </SectionHeader>
                <div className="details">
                    <BookingDetail
                        title='30% deposit secures your date'
                        description='Remaining balance due on the day of the session.'
                    />
                    <BookingDetail
                        title='72-hr cancellation policy'
                        description='Full refund if cancelled at least 3 days before.'
                    />
                    <BookingDetail
                        title='Travel available nationwide'
                        description='Based in New York. Travel fees apply outside NYC.'
                    />
                    <BookingDetail
                        title='Please note any allergies'
                        description='All products are professional-grade and skin-safe.'
                    />
                </div>
            </div>
            <div className="booking-form">  
                <SectionHeader>Request a booking</SectionHeader>
                <BookingForm/>
            </div>
        </section>
    )
}

