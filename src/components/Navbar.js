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
                </ul>

                <div className="NavbarWindowButtons">
                    <button className='RedButton'/>
                    <button className='YellowButton'/>
                    <button className='GreenButton'/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;