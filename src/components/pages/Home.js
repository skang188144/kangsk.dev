import TerminalController from '../TerminalController';
import './Home.css'

const Home = () => {
    const prompt = 'guest@kangsk.dev:/home$';
    const initialInput = '';
    const initialDisplayTitle1 = [
        '██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ████████╗ ██████╗    ',
        '██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ╚══██╔══╝██╔═══██╗   ',
        '██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         ██║   ██║   ██║   ',
        '██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██║   ██║   ██║   ',
        '╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗       ██║   ╚██████╔╝   ',
        ' ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝       ╚═╝    ╚═════╝    '
        ].map(text => {
            return (<div className="InitialDisplayTitle" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationGroup={ 0 }></div>);
        });
    const initialDisplayTitle2 = [
        ' ',
        '██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗  ██╗           ██████╗ ███████╗██╗   ██╗',
        '██║ ██╔╝██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║ ██╔╝           ██╔══██╗██╔════╝██║   ██║',
        '█████╔╝ ███████║██╔██╗ ██║██║  ███╗███████╗█████╔╝            ██║  ██║█████╗  ██║   ██║',
        '██╔═██╗ ██╔══██║██║╚██╗██║██║   ██║╚════██║██╔═██╗            ██║  ██║██╔══╝  ╚██╗ ██╔╝',
        '██║  ██╗██║  ██║██║ ╚████║╚██████╔╝███████║██║  ██╗    ██╗    ██████╔╝███████╗ ╚████╔╝ ',
        '╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝    ╚═════╝ ╚══════╝  ╚═══╝  '
        ].map(text => {
            return (<div className="InitialDisplayTitle" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationGroup={ 1 }></div>);
        });

    const initialDisplayTitleElements = initialDisplayTitle1.concat(initialDisplayTitle2);

    const initialDisplayText1 = [
        ' ',
        ' ',
        'Welcome to kangsk.dev v1.8.14',
        ].map(text => {
            return (<div className="InitialDisplayText" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationGroup={ 2 }></div>);
        });
    
    const initialDisplayText2 = [
        ' ',
        "Type 'help' to view the available list of commands.",
        ' '
    ].map(text => {
        return (<div className="InitialDisplayText" enableTypeAnimation='true' typeAnimationText={ text } typeAnimationGroup={ 3 }></div>);
    });

    const initialDisplayTextElements = initialDisplayText1.concat(initialDisplayText2);


    const handlePageSpecificCommands = (command, args) => {
        let output = [];

        switch (command) {
            case 'help':
                output.push({text: 'kangsk.dev bash, version 1.8.14(1)-release (x86_64-pc-linux-gnu)', color: '#0f0'});
                output.push({text: "These shell commands are defined internally.  Type `help' to see this list.", color: '#0f0'});
                output.push({text: ' '});
                output.push({text: 'Quick Navigation:', color: '#f5c743'});
                output.push({text: ' '});
                output.push({text: '  home', color: '#f5c743'});
                output.push({text: "    You're already here, silly."});
                output.push({text: ' '});
                output.push({text: '  about', color: '#f5c743'});
                output.push({text: '    Change the current working directory to /about. Contains information about who I am and what I do.'});
                output.push({text: ' '});
                output.push({text: '  projects', color: '#f5c743'});
                output.push({text: '    Change the current working directory to /projects. Contains information about my personal projects.'});
                output.push({text: ' '});
                // output.push({text: '  pokemon-ai', color: '#f5c743'});
                // output.push({text: '    Change the current working directory to /pokemon-ai. Watch an AI play Pokemon!'});
                // output.push({text: ' '});
                // output.push({text: '  terminal', color: '#f5c743'});
                // output.push({text: '    Change the current working directory to /terminal. Access a real Linux terminal.'});
                // output.push({text: ' '});
                output.push({text: 'Miscellaneous Information:', color: '#f5c743'});
                output.push({text: ' '})
                output.push({text: '  socials [-a]', color: '#f5c743'});
                output.push({text: '    List all social media handles'})
                output.push({text: ' '});
                output.push({text: 'General Commands:', color: '#f5c743'});
                output.push({text: ' '});
                output.push({text: '  ls', color: '#f5c743'});
                output.push({text: "    List the current working directory's contents"});
                output.push({text: ' '});
                output.push({text: '  cat [file]', color: '#f5c743'});
                output.push({text: '    Concatenate files and print on the standard output'});
                output.push({text: ' '});
                output.push({text: '  cd [dir]', color: '#f5c743'});
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
            handlePageSpecificCommands = { handlePageSpecificCommands }>
                { initialDisplayTitleElements }
                { initialDisplayTextElements }
            </TerminalController>
    );
}

export default Home;