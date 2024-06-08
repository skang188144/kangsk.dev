import TerminalController from '../TerminalController';
import './About.css'

const About = () => {
    const prompt = 'guest@kangsk.dev:/about$';
    const initialInput = '';

    /*
     * DISPLAY ONE 
     */
    const title = [
        ' █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗',
        '██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝',
        '███████║██████╔╝██║   ██║██║   ██║   ██║   ',
        '██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   ',
        '██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   ',
        '╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   '
    ].map(text => {
        return (<div className="AboutTitle" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 0 }></div>);
    });

    const socialMediaIconRowContainer = 
        <div className='AboutSocialMediaIconRowContainer'>
            <a className='AboutGitHubIconContainer' href='https://www.github.com/skang188144'>
                <img className='AboutGitHubIcon' src='/GitHubIcon.png'></img>
            </a>
            <a className='AboutLinkedInIconContainer' href='https://www.linkedin.com/in/kangsk'>
                <img className='AboutLinkedInIcon' src='/LinkedInIcon.png'></img>
            </a>
        </div>
    const leftColumnContainer = 
        <div className='AboutLeftColumnContainer'>
            { title }
            <img className='AboutHeadshotImage' src='/Headshot.png'></img>
            { socialMediaIconRowContainer }
        </div>

    const text1 = [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        "Hi there! I'm Sanghyeok, a third-year computer science student at Boston",        
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 1 } typeAnimationDelay={ 750 }></div>);
    });

    const text2 = [
        'University.',
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 2 }></div>);
    });

    const text3 = [
        ' ',
        "I'm currently working as a research assistant at Boston University, aiding",
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 3 } typeAnimationDelay={ 500 }></div>);
    });

    const text4 = [
        'in the research and development of an exciting new networking technology',
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 4 }></div>);
    });

    const text5 = [
        'called Real-Time Liquid Wireless Networking (RT-LWN).',
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 5 }></div>);
    });

    const text6 = [
        ' ',
        'My knowledge and experience encompasses a wide range of fields within'
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 6 } typeAnimationDelay={ 500 }></div>);
    });

    const text7 = [
        'computer science, from software engineering to network engineering.',

    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 7 }></div>);
    });

    const text8 = [
        "Some technologies I've used in the past include:"
    ].map(text => {
        return (<div className="AboutText" enableTypeAnimation={ 'true' } typeAnimationText={ text } typeAnimationGroup={ 8 } typeAnimationDelay={ 500 }></div>);
    });

    const technologiesIconRowContainer1 = 
        <div className='AboutTechnologiesIconRowContainer1'>
            <div className='AboutJavaIconContainer'>
                <img className='AboutJavaIcon' src='/JavaIcon.png'/>
            </div>
            <div className='AboutPythonIconContainer'>
                <img className='AboutPythonIcon' src='/PythonIcon.png'/>
            </div>
            <div className='AboutCIconContainer'>
                <img className='AboutCIcon' src='/CIcon.png'/>
            </div>
            <div className='AboutOCamlIconContainer'>
                <img className='AboutOCamlIcon' src='/OCamlIcon.png'/>
            </div>
            <div className='AboutJavascriptIconContainer'>
                <img className='AboutJavascriptIcon' src='/JavascriptIcon.png'/>
            </div>
        </div>;

    const technologiesIconRowContainer2 =
        <div className='AboutTechnologiesIconRowContainer2'>
            <div className='AboutHTMLIconContainer'>
                <img className='AboutHTMLIcon' src='/HTMLIcon.png'/>
            </div>
            <div className='AboutCSSIconContainer'>
                <img className='AboutCSSIcon' src='/CSSIcon.png'/>
            </div>
            <div className='AboutReactIconContainer'>
                <img className='AboutReactIcon' src='/ReactIcon.png'/>
            </div>
            <div className='AboutAndroidIconContainer'>
                <img className='AboutAndroidIcon' src='/AndroidIcon.png'/>
            </div>
            <div className='AboutSpringBootIconContainer'>
                <img className='AboutSpringBootIcon' src='/SpringBootIcon.png'/>
            </div>
        </div>;

    const rightColumnContainer =
        <div className='AboutRightColumnContainer'>
            { text1 }
            { text2 }
            { text3 }
            { text4 }
            { text5 }
            { text6 }
            { text7 }
            { text8 }
            { technologiesIconRowContainer1 }
            { technologiesIconRowContainer2 }
        </div>

    const rowContainer = 
        <div className='AboutRowContainer'>
            { leftColumnContainer }
            { rightColumnContainer }
        </div>

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
                output.push({text: "    You're already here, silly."});
                output.push({text: ' '});
                output.push({text: '  projects', color: '#f5c743'});
                output.push({text: '    Change the current working directory to /projects. Contains information about my personal projects.'});
                output.push({text: ' '});
                output.push({text: '  pokemon-ai', color: '#f5c743'});
                output.push({text: '    Change the current working directory to /pokemon-ai. Watch an AI play Pokemon!'});
                output.push({text: ' '});
                output.push({text: '  terminal', color: '#f5c743'});
                output.push({text: '    Change the current working directory to /terminal. Access a real Linux terminal.'});
                output.push({text: ' '});
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
                { rowContainer }
                {/* { initialDisplayElements2 } */}
        </TerminalController>
    );
}

export default About;