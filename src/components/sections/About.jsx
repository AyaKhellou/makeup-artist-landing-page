import makeupStain from '../../assets/makeup-stain.png'
import aboutMe from '../../assets/about-me.png'
import features from '../../data/features'
import Feature from '../ui/Feature'
import SectionHeader from '../ui/SectionHeader'


export default function About(){
    return(
        <section className="about" id='about'>
            <div className="intro">
                <SectionHeader
                description="With over 8 years transforming faces across New York, LA, and beyond,  
                    I've built my craft at the intersection of technique and intuition. 
                    I  believe makeup is not about covering up — it's about revealing the most  
                    luminous version of who you already are. From intimate bridal mornings  
                    to high-fashion shoots, I bring the same care, precision, and warmth to
                    every chair."
                >Hi, I'm <span>Amelia</span></SectionHeader>
            </div>
            <div className="about-image">
                <img src={makeupStain} alt="Makeup Stain" />
                <img src={aboutMe} alt="Professional makeup artist Amelia applying makeup" />
            </div>
            <ul className="features">
                {features.map((feature, index) => (
                    <Feature 
                        key={index} 
                        icon={feature.icon} 
                        title={feature.title} 
                        description={feature.description} 
                    />
                ))}
            </ul>
        </section>
    )
}

