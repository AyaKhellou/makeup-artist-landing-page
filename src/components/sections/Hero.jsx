import makeupStain from '../../assets/makeup-stain.png'
import LinkButton  from '../ui/LinkButton'
export default function Hero(){
    return(
        <section className="hero" id="hero">
            <h1 className="heading">
                where{" "}
                <span>beauty
                    <img src={makeupStain} />
                </span>{" "}
                <br />
                meets 
                <span> artistry</span>
            </h1>
            <p className="subheading">
                Transformative looks crafted for brides, editorials, and every moment  worth remembering. Based in New York — available worldwide.
            </p>
            <LinkButton id="booking">book now</LinkButton>
        </section>
    )
}