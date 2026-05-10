export default function GalleryItem({ image }) {
    return (
        <div className="gallery-item">
            <img src={image.src} alt={image.alt} loading="lazy" />
        </div>
    )
}