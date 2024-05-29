import './Navbar.css';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    return (
        <>
            <nav className='Navbar'>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/" className='HomeListItemLink'>guest@kangsk: /home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">guest@kangsk: /about</Link>
                    </li>
                    <li className={location.pathname === '/projects' ? 'active' : ''}>
                        <Link to="/projects">guest@kangsk: /projects</Link>
                    </li>
                    <li className={location.pathname === '/pokemon-ai' ? 'active' : ''}>
                        <Link to="/pokemon-ai">guest@kangsk: /pokemon-ai</Link>
                    </li>
                    <li className={location.pathname === '/terminal' ? 'active' : ''}>
                        <Link to="/terminal">guest@kangsk: /terminal</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;