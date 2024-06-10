import './Navbar.css';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav className='Navbar'>
                <ul>
                    <li className={location.pathname === '/' ? 'Active' : ''}>
                        <Link to="/" className='HomeListItemLink'>guest@kangsk: /home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'Active' : ''}>
                        <Link to="/about">guest@kangsk: /about</Link>
                    </li>
                    <li className={location.pathname === '/projects' ? 'Active' : ''}>
                        <Link to="/projects">guest@kangsk: /projects</Link>
                    </li>
                    {/* <li className={location.pathname === '/pokemon-ai' ? 'Active' : ''}>
                        <Link to="/pokemon-ai">guest@kangsk: /pokemon-ai</Link>
                    </li>
                    <li className={location.pathname === '/terminal' ? 'Active' : ''}>
                        <Link to="/terminal">guest@kangsk: /terminal</Link>
                    </li> */}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;