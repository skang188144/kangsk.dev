import './Navbar.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [homeListItemColor, setHomeListItemColor] = useState('#383434')
    const [aboutListItemColor, setAboutListItemColor] = useState('#383434')
    const [projectsListItemColor, setProjectsListItemColor] = useState('#383434')
    const [pokemonAIListItemColor, setPokemonAIListItemColor] = useState('#383434')
    const [terminalListItemColor, setTerminalListItemColor] = useState('#383434')

    const location = useLocation()

    const grayAllListItems = () => {
        setHomeListItemColor('#383434')
        setAboutListItemColor('#383434')
        setProjectsListItemColor('#383434')
        setPokemonAIListItemColor('#383434')
        setTerminalListItemColor('#383434')
    }

    useEffect(() => {
        if (location.pathname === '/') {
            grayAllListItems()
            setHomeListItemColor('black')
        } else if (location.pathname === '/about') {
            grayAllListItems()
            setAboutListItemColor('black')
        } else if (location.pathname === '/projects') {
            grayAllListItems()
            setProjectsListItemColor('black')
        } else if (location.pathname === '/pokemon-ai') {
            grayAllListItems()
            setPokemonAIListItemColor('black')
        } else if (location.pathname === '/terminal') {
            grayAllListItems()
            setTerminalListItemColor('black')
        }
    })

    return (
        <>
            <nav className='Navbar'>
                <ul>
                    <li className='HomeListItem' style={{ backgroundColor: homeListItemColor }}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='AboutListItem' style={{ backgroundColor: aboutListItemColor }}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='ProjectsListItem' style={{ backgroundColor: projectsListItemColor }}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='PokemonAIListItem' style={{ backgroundColor: pokemonAIListItemColor }}>
                        <Link to="/pokemon-ai">Pokemon-AI</Link>
                    </li>
                    <li className='TerminalListItem' style={{ backgroundColor: terminalListItemColor }}>
                        <Link to="/terminal">Terminal</Link>
                    </li>
                </ul>

            </nav>
        </>
    );
}

export default Navbar;