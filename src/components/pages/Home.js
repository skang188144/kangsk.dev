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
    ].map((text, index) => {
        return (<div className="HomeTitle" key={'HomeTitle1Line' + index.toString()} enabletypeanimation='true' typeanimationtext={ text } typeanimationgroup={ 0 }></div>);
    });
    const initialDisplayTitle2 = [
        ' ',
        '██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗  ██╗           ██████╗ ███████╗██╗   ██╗',
        '██║ ██╔╝██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║ ██╔╝           ██╔══██╗██╔════╝██║   ██║',
        '█████╔╝ ███████║██╔██╗ ██║██║  ███╗███████╗█████╔╝            ██║  ██║█████╗  ██║   ██║',
        '██╔═██╗ ██╔══██║██║╚██╗██║██║   ██║╚════██║██╔═██╗            ██║  ██║██╔══╝  ╚██╗ ██╔╝',
        '██║  ██╗██║  ██║██║ ╚████║╚██████╔╝███████║██║  ██╗    ██╗    ██████╔╝███████╗ ╚████╔╝ ',
        '╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝    ╚═════╝ ╚══════╝  ╚═══╝  '
    ].map((text, index) => {
        return (<div className="HomeTitle" key={'HomeTitle2Line' + index.toString()} enabletypeanimation='true' typeanimationtext={ text } typeanimationgroup={ 1 }></div>);
    });

    const initialDisplayTitleElements = initialDisplayTitle1.concat(initialDisplayTitle2);

    const initialDisplayText1 = [
        ' ',
        ' ',
        'Welcome to kangsk.dev v1.8.14',
    ].map((text, index) => {
        return (<div className="HomeText" key={'HomeText1Line' + index.toString()} enabletypeanimation='true' typeanimationtext={ text } typeanimationgroup={ 2 }></div>);
    });
    
    const initialDisplayText2 = [
        ' ',
        "Type 'help' to view the available list of commands.",
        ' '
    ].map((text, index) => {
        return (<div className="HomeText" key={'HomeText2Line' + index.toString()} enabletypeanimation='true' typeanimationtext={ text } typeanimationgroup={ 3 }></div>);
    });

    const initialDisplayTextElements = initialDisplayText1.concat(initialDisplayText2);


    const handlePageSpecificCommands = (command, args) => {
        let output = [];

        switch (command) {
            case 'ls':
                if (args.length > 1) {
                    output.push({text: args[0] + ": too many arguments. Type 'help " + command + "' for the proper usage."})
                } else if (args.length === 1 && args[0] !== '-a') {
                    output.push({text:  args[0] + ": invalid argument. Type 'help " + command + "' for the proper usage."})
                } else if (args.length === 1 && args[0] === '-a') {
                    output.push({text: 'home about projects', color: '#f5c743'})
                } else {
                    output.push({text: 'about projects', color: '#f5c743'})
                }
                break;
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
                output.push({text: 'General Commands:', color: '#f5c743'});
                output.push({text: ' '});
                output.push({text: '  ls [-a]', color: '#f5c743'});
                output.push({text: "    List the current working directory's contents."});
                output.push({text: ' '});
                output.push({text: '  cd [dir]', color: '#f5c743'});
                output.push({text: '    Change the current working directory to DIR.'});
                output.push({text: ' '})
                output.push({text: '  clear', color: '#f5c743'});
                output.push({text: '    Clear the terminal screen.'})
                output.push({text: ' '})
                output.push({text: '  socials [-a]', color: '#f5c743'});
                output.push({text: '    List all social media handles.'})
                output.push({text: ' '})
                output.push({text: '  source', color: '#f5c743'});
                output.push({text: '    View the site source code.'})
                break;
            default:
                break;
        }

        return output;
    }

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