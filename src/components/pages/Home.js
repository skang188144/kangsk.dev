import { useState } from 'react';
import TerminalComponent from "../TerminalComponent";
import TerminalController from '../TerminalController';
import './Home.css'

const Home = () => {
    const prompt = 'guest@kangsk.dev:/home$';
    const initialInput = '';
    const initialDisplayTitle = [
        '░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗  ████████╗░█████╗░',
        '░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝  ╚══██╔══╝██╔══██╗',
        '░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░  ░░░██║░░░██║░░██║',
        '░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░  ░░░██║░░░██║░░██║',
        '░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗  ░░░██║░░░╚█████╔╝',
        '░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░',
        ' ',
        '  ██╗░░██╗░█████╗░███╗░░██╗░██████╗░░██████╗██╗░░██╗       ██████╗░███████╗██╗░░░██╗',
        '  ██║░██╔╝██╔══██╗████╗░██║██╔════╝░██╔════╝██║░██╔╝       ██╔══██╗██╔════╝██║░░░██║',
        '  █████═╝░███████║██╔██╗██║██║░░██╗░╚█████╗░█████═╝░       ██║░░██║█████╗░░╚██╗░██╔╝',
        '  ██╔═██╗░██╔══██║██║╚████║██║░░╚██╗░╚═══██╗██╔═██╗░       ██║░░██║██╔══╝░░░╚████╔╝░',
        '  ██║░╚██╗██║░░██║██║░╚███║╚██████╔╝██████╔╝██║░╚██╗  ██╗  ██████╔╝███████╗░░╚██╔╝░░',
        '  ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═════╝░╚═╝░░╚═╝  ╚═╝  ╚═════╝░╚══════╝░░░╚═╝░░░',
        ' ',
        ' '

        // '        █▀ █▀█ █▀▀ ▀█▀ █░█░█ ▄▀█ █▀█ █▀▀   █▀▀ █▄░█ █▀▀ █ █▄░█ █▀▀ █▀▀ █▀█',
        // '        ▄█ █▄█ █▀░ ░█░ ▀▄▀▄▀ █▀█ █▀▄ ██▄   ██▄ █░▀█ █▄█ █ █░▀█ ██▄ ██▄ █▀▄',
        // '__   __   ___ ___            __   ___     ___       __          ___  ___  __  ',
        // '/__` /  \\ |__   |  |  |  /\\  |__) |__     |__  |\\ | / _` | |\\ | |__  |__  |__) ',
        // '.__/ \\__/ |     |  |/\\| /~~\\ |  \\ |___    |___ | \\| \\__> | | \\| |___ |___ |  \\ ',
            // '       ░█▀▀░█▀█░█▀▀░▀█▀░█░█░█▀█░█▀▄░█▀▀░░░█▀▀░█▀█░█▀▀░▀█▀░█▀█░█▀▀░█▀▀░█▀▄',
            // '       ░▀▀█░█░█░█▀▀░░█░░█▄█░█▀█░█▀▄░█▀▀░░░█▀▀░█░█░█░█░░█░░█░█░█▀▀░█▀▀░█▀▄',
            // '       ░▀▀▀░▀▀▀░▀░░░░▀░░▀░▀░▀░▀░▀░▀░▀▀▀░░░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀'
                                                                                       
        ];

    const initialDisplayText = [
        'Welcome to kangsk.dev v1814.14',
        ' ',
        "Type 'help' to view the available list of commands.",
        ' '
        ];

    // const initialDisplayTextContainer = <div className="InitialDisplayTextContainer">{initialDisplayTitle} { initialDisplayText }</div>;
    // const initialDisplayTextAndImageContainer = <div className="InitialDisplayTextAndImageContainer">{ initialDisplayTextContainer }</div>; //<img className="HeadshotImage" src="/Headshot.jpeg"></img>

    return (
        <TerminalController
            prompt = { prompt } 
            initialInput = { initialInput }
            initialDisplayTitle = { initialDisplayTitle }
            initialDisplayText = { initialDisplayText }
            overrideInitialDisplay = { false }
            overrideInitialDisplayElement = { null }/>
    );
}

export default Home;