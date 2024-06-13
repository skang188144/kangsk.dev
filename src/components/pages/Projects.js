import TerminalController from '../TerminalController';
import './Projects.css';

const Projects = () => {
    const prompt = 'guest@kangsk.dev:/projects$';
    const initialInput = '';

    /**
     * Title Elements
     */
    const title = [
        '██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗',
        '██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝',
        '██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗',
        '██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║',
        '██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║',
        '╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝'
    ].map((text, index) => {
        return (<div className="ProjectsTitle" key={'ProjectsTitle1Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 0 }></div>);
    });

    const titleColumnContainer = 
        <div className='ProjectsTitleColumnContainer'>
            { title }
        </div>;

    /**
     * Projects Elements
     */

    const project1Text1 = [
        'A digital wellbeing Android application',
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject1Text1Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 1 } typeanimationdelay={ 500 }>{ ' '.repeat(39) }</div>);
    });

    const project1Text2 = [
        'dedicated to empowering users to regain',
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject1Text2Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 2 }>{ ' '.repeat(39) }</div>);
    });

    const project1Text3 = [
        'control of their digital lives.'
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject1Text3Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 3 }>{ ' '.repeat(39) }</div>);
    });

    const project1TechnologiesRowContainer =
        <div className='ProjectsProjectTechnologiesRowContainer'>
            <img className='ProjectsProjectTechnologyImage' src='/JavaIcon.png' alt='Java Icon' enablecssanimation='true' cssanimationgroup={ 3 } cssanimationdelay={ 300 }/>
            <img className='ProjectsProjectTechnologyImage' src='/AndroidIcon.png' alt='Android Icon' enablecssanimation='true' cssanimationgroup={ 4 } cssanimationdelay={ 150 }/>
        </div>

    const projectContentsContainer1 = 
        <div className='ProjectsProjectContentContainer'>
            { project1Text1 }
            { project1Text2 }
            { project1Text3 }
            { project1TechnologiesRowContainer }
        </div>;

    const projectContainer1 = 
        <div className='ProjectsDetoxProjectContainer'>
            <img className='ProjectsProjectImage' src='/DetoxIcon.png' alt='Detox Icon' enablecssanimation='true' cssanimationgroup={ 0 } cssanimationdelay={ 150 }/>
            { projectContentsContainer1 }
        </div>;

    const project2Text1 = [
        'A tool for the migration of Daily Mix'
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject2Text1Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 6 } typeanimationdelay={ 500 }>{ ' '.repeat(37) }</div>);
    });

    const project2Text2 = [
        'playlists from Spotify to TIDAL.'
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject2Text2Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 7 }>{ ' '.repeat(37) }</div>);
    });

    const project2TechnologiesRowContainer =
        <div className='ProjectsProjectTechnologiesRowContainer'>
            <img className='ProjectsProjectTechnologyImage' src='/PythonIcon.png' alt='Python Icon' enablecssanimation='true' cssanimationgroup={ 7 } cssanimationdelay={ 300 }/>
        </div>
    
    const projectContentContainer2 =
        <div className='ProjectsProjectContentContainer'>
            { project2Text1 }
            { project2Text2 }
            { project2TechnologiesRowContainer }
        </div>;

    const projectContainer2 = 
        <div className='ProjectsTidalfyProjectContainer'>
            <img className='ProjectsProjectImage' src='/TidalfyIcon.png' alt='Tidalfy Icon' enablecssanimation='true' cssanimationgroup={ 5 } cssanimationdelay={ 750 }/>
            { projectContentContainer2 }
        </div>;

    const project3Text1 = [
        'A terminal themed developer portfolio'
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject3Text1Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 9 } typeanimationdelay={ 500 }>{ ' '.repeat(35) }</div>);
    });

    const project3Text2 = [
        'built to showcase my various projects.'
    ].map((text, index) => {
        return (<div className="ProjectsProjectText" key={'ProjectsProject3Text2Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 10 }>{ ' '.repeat(35) }</div>);
    });

    const project3TechnologiesRowContainer =
        <div className='ProjectsProjectTechnologiesRowContainer'>
            <img className='ProjectsProjectTechnologyImage' src='/ReactIcon.png' alt='React Icon' enablecssanimation='true' cssanimationgroup={ 10 } cssanimationdelay={ 300 }/>
            <img className='ProjectsProjectTechnologyImage' src='/JavascriptIcon.png' alt='Javascript Icon' enablecssanimation='true' cssanimationgroup={ 11 } cssanimationdelay={ 150 }/>
            <img className='ProjectsProjectTechnologyImage' src='/HTMLIcon.png' alt='HTML Icon' enablecssanimation='true' cssanimationgroup={ 12 } cssanimationdelay={ 150 }/>
            <img className='ProjectsProjectTechnologyImage' src='/CSSIcon.png' alt='CSS Icon' enablecssanimation='true' cssanimationgroup={ 13 } cssanimationdelay={ 150 }/>
        </div>
    
    const projectContentContainer3 =
        <div className='ProjectsProjectContentContainer'>
            { project3Text1 }
            { project3Text2 }
            { project3TechnologiesRowContainer }
        </div>;

    const projectContainer3 = 
        <div className='ProjectsKangskDevProjectContainer'>
            <img className='ProjectsProjectImage' src='/KangskDevIconOG.png' alt='kangsk.dev Icon' enablecssanimation='true' cssanimationgroup={ 8 } cssanimationdelay={ 750 }/>
            { projectContentContainer3 }
        </div>;

    const projectContainer4 = 
        <div className='ProjectsProjectContainer'>
        </div>;

    const projectColumnContainer1 =
        <div className='ProjectsProjectColumnContainer'>
            { projectContainer1 }
            { projectContainer3 }
        </div>;

    const projectColumnContainer2 =
        <div className='ProjectsProjectColumnContainer'>
            { projectContainer2 }
            { projectContainer4 }
        </div>;

    const projectRowContainer = 
        <div className='ProjectsProjectRowContainer'>
            { projectColumnContainer1 }
            { projectColumnContainer2 }
        </div>;

    const bodyColumnContainer = 
        <div className='ProjectsBodyColumnContainer'>
            { projectRowContainer }
        </div>;

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
                    output.push({text: 'home about', color: '#f5c743'})
                }
                break;
            case 'help':
                output.push({text: 'kangsk.dev bash, version 1.8.14(1)-release (x86_64-pc-linux-gnu)', color: '#0f0'});
                output.push({text: "These shell commands are defined internally.  Type `help' to see this list.", color: '#0f0'});
                output.push({text: ' '});
                output.push({text: 'Quick Navigation:', color: '#f5c743'});
                output.push({text: ' '});
                output.push({text: '  home', color: '#f5c743'});
                output.push({text: "    Change the current working directory to /home. Landing page."});
                output.push({text: ' '});
                output.push({text: '  about', color: '#f5c743'});
                output.push({text: "    Change the current working directory to /about. Contains information about who I am and what I do."});
                output.push({text: ' '});
                output.push({text: '  projects', color: '#f5c743'});
                output.push({text: "    You're already here, silly."});
                output.push({text: ' '});
                output.push({text: 'General Commands:', color: '#f5c743'});
                output.push({text: ' '});
                output.push({text: '  ls', color: '#f5c743'});
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
                { titleColumnContainer }
                { bodyColumnContainer }
        </TerminalController>
    );
}

export default Projects;