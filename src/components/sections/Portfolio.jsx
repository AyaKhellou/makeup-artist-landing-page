import galleryImages  from "../../data/galleryImages"
import { useState } from 'react'
import GalleryItem from "../ui/GalleryItem"
import SectionHeader from '../ui/SectionHeader'


const filters = ['All', 'Bridal', 'Editorial', 'Glam', 'Natural']

export default function Portfolio(){
    const [currentFilter, setCurrentFilter] = useState('All')

    const filteredImages = 
    currentFilter === 'All' 
    ?galleryImages.slice(0,5)
    :galleryImages.filter(image=> image.category === currentFilter)

    return(
        <section className="portfolio" id='portfolio'>
            <SectionHeader>Signature Looks</SectionHeader>
            <div className="filters">
                {filters.map(filter => (
                    <button 
                    key={filter} 
                    onClick={()=>setCurrentFilter(filter)} 
                    className={currentFilter === filter ? 'active' : ''}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="gallery">
                {filteredImages.map(image => 
                    <GalleryItem image={image} key={image.id}/>
                )}
            </div> 
        </section>
    )
}