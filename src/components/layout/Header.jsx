import LinkButton from '../ui/LinkButton'
import navLinks from '../../data/navLinks'
import React from 'react'
export default function Header(){
    const [open , setOpen] = React.useState(false)
    function toggleMenu(){
        setOpen(!open)
    }
    console.log(open)

    return(
        <header>
            <h2 className="logo"><a href="#hero">Amelia</a></h2>
            <nav aria-label="Main navigation">
                <MenuButton toggleMenu={toggleMenu}/>
                <Links open={open}/>
            </nav>
        </header>
    )
}
function Links({open}){
    return(
        <ul className={open ? 'open' : ''}>
            {navLinks.map((link) => (
                <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))}
            <LinkButton id="booking">book now</LinkButton>
        </ul>
    )
}
function MenuButton({toggleMenu}){
    return(
        <>
            <div 
            className='hamburger-menu'
            onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}