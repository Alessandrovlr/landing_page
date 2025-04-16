import { Link } from "react-router-dom"
import './menu.css'

export const Menu = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Projeto'>Projeto</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
        </nav>
    )
}