import services from '../../data/services'
import PriceCard from '../ui/PriceCard'
import LinkButton from '../ui/LinkButton'
import SectionHeader from '../ui/SectionHeader'
export default function Services(){

const featuredService = services.find(service => service.featured)
const regularServices = services.filter(service => !service.featured)

    return(
        <section className="services" id="services">
            <SectionHeader
                description="Every look is tailored to you. Pricing reflects the session type, duration, and any travel required."
            >Investment in yourself</SectionHeader>
            <div className="price-cards">
                {regularServices.map((service) => (
                  <PriceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      features={service.features}
                  />))}
                  {featuredService && (
                    <div className="main-service" key={featuredService.id}>
                      <div className="details">
                          <h3>{featuredService.title}</h3>
                          <p>{featuredService.description}</p>
                      </div>
                      <div className="price">
                          <span>${featuredService.price}</span>
                          <p>{featuredService.features[0]}</p>
                      </div>
                      <LinkButton id="booking">Book this package</LinkButton>
                    </div>
                  )}
            </div>
        </section>
    )
}