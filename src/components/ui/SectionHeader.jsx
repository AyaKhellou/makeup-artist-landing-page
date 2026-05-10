export default function SectionHeader({children, ...rest}) {
    return (
        <div className="section-header">
            <h2>{children}</h2>
            <p>{rest.description}</p>
        </div>
    );
}