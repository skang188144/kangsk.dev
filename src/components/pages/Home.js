import TerminalController from '../TerminalController';
import './Home.css'

const Home = () => {
    const prompt = 'guest@kangsk.dev:/home$';
    const initialInput = '';
    const initialDisplayTitleElements = [
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
        ' '].map(text => {
            return (<div className="InitialDisplayTitle" enableTypeAnimation='true' typeAnimationText={ text }> </div>);
        });

    const initialDisplayTextElements = [
        'Welcome to kangsk.dev v1814.14',
        ' ',
        "Type 'help' to view the available list of commands.",
        ' '
        ].map(text => {
            return (<div className="InitialDisplayText" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationDelay={ 2500 }> </div>);
        });


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
                output.push({text: "    You're already here, silly."});
                output.push({text: ' '});
                output.push({text: '  about', color: '#00B2CA'});
                output.push({text: '    Change the current working directory to /about. Contains information about who I am and what I do.'});
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

    // const initialDisplayTextContainer = <div className="InitialDisplayTextContainer">{initialDisplayTitle} { initialDisplayText }</div>;
    // const initialDisplayTextAndImageContainer = <div className="InitialDisplayTextAndImageContainer">{ initialDisplayTextContainer }</div>; //<img className="HeadshotImage" src="/Headshot.jpeg"></img>

    return (
        <TerminalController
            prompt = { prompt } 
            initialInput = { initialInput }
            initialDisplayTitleElements = { initialDisplayTitleElements }
            initialDisplayTextElements = { initialDisplayTextElements }
            getPageSpecificCommandOutput = { getPageSpecificCommandOutput }
            overrideInitialDisplayText = { false }
            overrideInitialDisplayTitle= { false }
            overrideInitialDisplayElement = { null }/>
    );
}

export default Home;