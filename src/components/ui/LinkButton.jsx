export default function LinkButton({id, children}){
    function handleClick(){
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return(
        <button className="cta" onClick={handleClick}>{children}</button>
    )
}