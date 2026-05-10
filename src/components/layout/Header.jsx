import LinkButton from '../ui/LinkButton'
import navLinks from '../../data/navLinks'
export default function Header(){

    return(
        <header>
            <h2 className="logo"><a href="#hero">Amelia</a></h2>
            <nav aria-label="Main navigation">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <LinkButton id="booking">book now</LinkButton>
        </header>
    )
}