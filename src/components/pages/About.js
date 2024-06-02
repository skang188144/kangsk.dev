import { useEffect, useRef } from 'react';
import TerminalController from '../TerminalController';
import './About.css'

const About = () => {
    const prompt = 'guest@kangsk.dev:/about$';
    const initialInput = '';
    const initialDisplayTitle = [
        '░██████╗░█████╗░███╗░░██╗░██████╗░██╗░░██╗██╗░░░██╗███████╗░█████╗░██╗░░██╗',
        '██╔════╝██╔══██╗████╗░██║██╔════╝░██║░░██║╚██╗░██╔╝██╔════╝██╔══██╗██║░██╔╝',
        '╚█████╗░███████║██╔██╗██║██║░░██╗░███████║░╚████╔╝░█████╗░░██║░░██║█████═╝░',
        '░╚═══██╗██╔══██║██║╚████║██║░░╚██╗██╔══██║░░╚██╔╝░░██╔══╝░░██║░░██║██╔═██╗░',
        '██████╔╝██║░░██║██║░╚███║╚██████╔╝██║░░██║░░░██║░░░███████╗╚█████╔╝██║░╚██╗',
        '╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝░╚════╝░╚═╝░░╚═╝',
        ' ',
        '██╗░░██╗░█████╗░███╗░░██╗░██████╗░',
        '██║░██╔╝██╔══██╗████╗░██║██╔════╝░',
        '█████═╝░███████║██╔██╗██║██║░░██╗░',
        '██╔═██╗░██╔══██║██║╚████║██║░░╚██╗',
        '██║░╚██╗██║░░██║██║░╚███║╚██████╔╝',
        '╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░',
        ' ',
        ' ',
        ' '
        // '█▀ █▀█ █▀▀ ▀█▀ █░█░█ ▄▀█ █▀█ █▀▀   █▀▀ █▄░█ █▀▀ █ █▄░█ █▀▀ █▀▀ █▀█',
        // '▄█ █▄█ █▀░ ░█░ ▀▄▀▄▀ █▀█ █▀▄ ██▄   ██▄ █░▀█ █▄█ █ █░▀█ ██▄ ██▄ █▀▄'
    ].map(text => {
        return (<div className="AboutInitialDisplayTitle" enableTypeAnimation='true' typeAnimationText={ text } enableDeleteAnimation='true' deleteAnimationDelay={ 3000 }> </div>);
    });

    const initialDisplayTitle2 = [
        '██╗    ░█████╗░███╗░░░███╗    ░█████╗░░░░░░░░░░',
        '██║    ██╔══██╗████╗░████║    ██╔══██╗░░░░░░░░░',
        '██║    ███████║██╔████╔██║    ███████║░░░░░░░░░',
        '██║    ██╔══██║██║╚██╔╝██║    ██╔══██║░░░░░░░░░',
        '██║    ██║░░██║██║░╚═╝░██║    ██║░░██║██╗██╗██╗',
        '╚═╝    ╚═╝░░╚═╝╚═╝░░░░░╚═╝    ╚═╝░░╚═╝╚═╝╚═╝╚═╝',
        ' ',
        ' ',
        '█▀ █▀█ █▀▀ ▀█▀ █░█░█ ▄▀█ █▀█ █▀▀   █▀▀ █▄░█ █▀▀ █ █▄░█ █▀▀ █▀▀ █▀█',
        '▄█ █▄█ █▀░ ░█░ ▀▄▀▄▀ █▀█ █▀▄ ██▄   ██▄ █░▀█ █▄█ █ █░▀█ ██▄ ██▄ █▀▄'
    ].map(text => {
        return (<div className="AboutInitialDisplayTitle" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationDelay={ 8000 } enableDeleteAnimation='true' deleteAnimationDelay={ 12000 }></div>);
    });

    const initialDisplayText = [
        ' ',
        "Hi there! I'm Sanghyeok, a third-year computer science student at Boston University.",
        ' ',
    ].map(text => {
        return (<div className="AboutInitialDisplayText" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationDelay={ 2200 } enableDeleteAnimation='true' deleteAnimationDelay={ 5500 }> </div>);
    });

    const initialDisplayTitleContainer = <div className='AboutInitialDisplayTitleContainer'>{ initialDisplayTitle } { initialDisplayTitle2 }</div>
    const initialDisplayTitleAndImageContainer = <div className='AboutInitialDisplayTitleAndImageContainer'>{ initialDisplayTitleContainer } <img className='HeadshotImage' src='/Headshot.jpeg'></img></div>

    const getPageSpecificCommandOutput = (command, args) => {
        let output = [];

        switch (command) {
            case 'help':
                output.push({text: 'kangsk.dev bash, version 1.8.14(1)-release (x86_64-pc-linux-gnu)', color: '#0f0'});
                output.push({text: "These shell commands are defined internally.  Type `help' to see this list.", color: '#0f0'});
                output.push({text: ' '});
                output.push({text: 'Quick Navigation:', color: '#00B2CA'});
                output.push({text: ' '});
                output.push({text: '  home', color: '#00B2CA'});
                output.push({text: "    Change the current working directory to /home. Landing page."});
                output.push({text: ' '});
                output.push({text: '  about', color: '#00B2CA'});
                output.push({text: "    You're already here, silly."});
                output.push({text: ' '});
                output.push({text: '  projects', color: '#00B2CA'});
                output.push({text: '    Change the current working directory to /projects. Contains information about my personal projects.'});
                output.push({text: ' '});
                output.push({text: '  pokemon-ai', color: '#00B2CA'});
                output.push({text: '    Change the current working directory to /pokemon-ai. Watch an AI play Pokemon!'});
                output.push({text: ' '});
                output.push({text: '  terminal', color: '#00B2CA'});
                output.push({text: '    Change the current working directory to /terminal. Access a real Linux terminal.'});
                output.push({text: ' '});
                output.push({text: 'Miscellaneous Information:', color: '#00B2CA'});
                output.push({text: ' '})
                output.push({text: '  socials [-a]', color: '#00B2CA'});
                output.push({text: '    List all social media handles'})
                output.push({text: ' '});
                output.push({text: 'General Commands:', color: '#00B2CA'});
                output.push({text: ' '});
                output.push({text: '  ls', color: '#00B2CA'});
                output.push({text: "    List the current working directory's contents"});
                output.push({text: ' '});
                output.push({text: '  cat [file]', color: '#00B2CA'});
                output.push({text: '    Concatenate files and print on the standard output'});
                output.push({text: ' '});
                output.push({text: '  cd [dir]', color: '#00B2CA'});
                output.push({text: '    Change the current working directory to DIR'});
                break;
        }

        return output;
    }

    return (
        <TerminalController
            prompt = { prompt } 
            initialInput = { initialInput }
            getPageSpecificCommandOutput = { getPageSpecificCommandOutput }>
                { initialDisplayTitleAndImageContainer }
        </TerminalController>
    );
}

export default About;