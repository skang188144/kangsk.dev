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
    ].map(text => {
        return (<div className="ProjectsTitle" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 0 }></div>);
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
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 1 }>{ ' '.repeat(39) }</div>);
    });

    const project1Text2 = [
        'dedicated to empowering users to regain',
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 2 }>{ ' '.repeat(39) }</div>);
    });

    const project1Text3 = [
        'control of their digital lives.'
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 3 }>{ ' '.repeat(39) }</div>);
    });

    const project1TechnologiesRowContainer =
        <div className='ProjectsProjectTechnologiesRowContainer'>
            <img className='ProjectsProjectTechnologyImage' src='/JavaIcon.png'></img>
            <img className='ProjectsProjectTechnologyImage' src='AndroidIcon.png'></img>
        </div>

    const projectContentsContainer1 = 
        <div className='ProjectsProjectContentContainer'>
            { project1Text1 }
            { project1Text2 }
            { project1Text3 }
            { project1TechnologiesRowContainer }
        </div>;

    const projectContainer1 = 
        <div className='ProjectsProjectContainer'>
            <img className='ProjectsProjectImage' src='DetoxIcon.png'></img>
            { projectContentsContainer1 }
        </div>;

    const project2Text1 = [
        'A tool for the migration of Daily Mix'
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 4 }>{ ' '.repeat(37) }</div>);
    });

    const project2Text2 = [
        'playlists from Spotify to TIDAL.'
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 5 }>{ ' '.repeat(37) }</div>);
    });

    const project2TechnologiesRowContainer =
        <div className='ProjectsProjectTechnologiesRowContainer'>
            <img className='ProjectsProjectTechnologyImage' src='/PythonIcon.png'></img>
        </div>
    
    const projectContentContainer2 =
        <div className='ProjectsProjectContentContainer'>
            { project2Text1 }
            { project2Text2 }
            { project2TechnologiesRowContainer }
        </div>;

    const projectContainer2 = 
        <div className='ProjectsProjectContainer'>
            <img className='ProjectsProjectImage' src='TidalfyIcon.png'></img>
            { projectContentContainer2 }
        </div>;

    const project3Text1 = [
        'A terminal themed developer portfolio'
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 6 }>{ ' '.repeat(35) }</div>);
    });

    const project3Text2 = [
        'built to showcase my various projects.'
    ].map(text => {
        return (<div className="ProjectsProjectText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 7 }>{ ' '.repeat(35) }</div>);
    });

    const project3TechnologiesRowContainer =
        <div className='ProjectsProjectTechnologiesRowContainer'>
            <img className='ProjectsProjectTechnologyImage' src='/ReactIcon.png'></img>
            <img className='ProjectsProjectTechnologyImage' src='/JavascriptIcon.png'></img>
            <img className='ProjectsProjectTechnologyImage' src='/HTMLIcon.png'></img>
            <img className='ProjectsProjectTechnologyImage' src='/CSSIcon.png'></img>
        </div>
    
    const projectContentContainer3 =
        <div className='ProjectsProjectContentContainer'>
            { project3Text1 }
            { project3Text2 }
            { project3TechnologiesRowContainer }
        </div>;

    const projectContainer3 = 
        <div className='ProjectsProjectContainer'>
            <img className='ProjectsProjectImage' src='KangskDevIcon.png'></img>
            { projectContentContainer3 }
        </div>;

    const projectContainer4 = 
        <div className='ProjectsProjectContainer'>
        </div>;

    const projectRowContainer1 = 
        <div className='ProjectsProjectRowContainer'>
            { projectContainer1 }
            { projectContainer2 }
        </div>;

    const projectRowContainer2 =
        <div className='ProjectsProjectRowContainer'>
            { projectContainer3 }
            { projectContainer4}
        </div>;

    const bodyColumnContainer = 
        <div className='ProjectsBodyColumnContainer'>
            { projectRowContainer1 }
            { projectRowContainer2 }
        </div>;

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
                output.push({text: "    Change the current working directory to /home. Landing page."});
                output.push({text: ' '});
                output.push({text: '  about', color: '#f5c743'});
                output.push({text: "    Change the current working directory to /about. Contains information about who I am and what I do."});
                output.push({text: ' '});
                output.push({text: '  projects', color: '#f5c743'});
                output.push({text: "    You're already here, silly."});
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