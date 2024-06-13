import TerminalController from '../TerminalController';
import './About.css'

const About = () => {
    const prompt = 'guest@kangsk.dev:/about$';
    const initialInput = '';

    const title = [
        ' █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗',
        '██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝',
        '███████║██████╔╝██║   ██║██║   ██║   ██║   ',
        '██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   ',
        '██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   ',
        '╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   '
    ].map((text, index) => {
        return (<div className="AboutTitle" key={'AboutTitle1Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 0 }>{ ' '.repeat(43) }</div>);
    });

    const socialMediaIconRowContainer = 
        <div className='AboutSocialMediaIconRowContainer'>
            <a className='AboutGitHubIconContainer' href='https://www.github.com/skang188144'>
                <img className='AboutGitHubIcon' src='/GitHubIcon.png' alt='GitHub Icon' enablecssanimation='true' cssanimationgroup={ 0 }/>
            </a>
            <a className='AboutLinkedInIconContainer' href='https://www.linkedin.com/in/kangsk'>
                <img className='AboutLinkedInIcon' src='/LinkedInIcon.png' alt='LinkedIn Icon' enablecssanimation='true' cssanimationgroup={ 0 }/>
            </a>
        </div>;

    const leftColumnContainer = 
        <div className='AboutLeftColumnContainer'>
            { title }
            <img className='AboutHeadshotImage' src='/Headshot.png' alt='Headshot' enablecssanimation='true' cssanimationgroup={ 0 }/>
            { socialMediaIconRowContainer }
        </div>;

    const text1 = [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        "Hi there! I'm Sanghyeok, a third-year computer science student at Boston",        
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText1Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 1 } typeanimationdelay={ 500 }></div>);
    });

    const text2 = [
        'University.',
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText2Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 2 }></div>);
    });

    const text3 = [
        ' ',
        "I'm currently working as a research assistant at Boston University, aiding",
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText3Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 3 } typeanimationdelay={ 500 }>{' '.repeat(74)}</div>);
    });

    const text4 = [
        'in the research and development of an exciting new networking technology',
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText4Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 4 }></div>);
    });

    const text5 = [
        'called Real-Time Liquid Wireless Networking (RT-LWN).',
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText5Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 5 }></div>);
    });

    const text6 = [
        ' ',
        'My knowledge and experience encompasses a wide range of fields within'
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText6Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 6 } typeanimationdelay={ 500 }></div>);
    });

    const text7 = [
        'computer science, from software engineering to network engineering.',

    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText7Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 7 }></div>);
    });

    const text8 = [
        "Some technologies I've used in the past include:"
    ].map((text, index) => {
        return (<div className="AboutText" key={'AboutText8Line' + index.toString()} enabletypeanimation={ 'true' } typeanimationtext={ text } typeanimationgroup={ 8 } typeanimationdelay={ 500 }></div>);
    });

    const technologiesIconRowContainer1 = 
        <div className='AboutTechnologiesIconRowContainer1'>
            <div className='AboutJavaIconContainer'>
                <img className='AboutJavaIcon' src='/JavaIcon.png' alt='Java Icon' enablecssanimation='true' cssanimationgroup={ 8 } cssanimationdelay={ 250 }/>
            </div>
            <div className='AboutPythonIconContainer'>
                <img className='AboutPythonIcon' src='/PythonIcon.png' alt='Python Icon' enablecssanimation='true' cssanimationgroup={ 9 } cssanimationdelay={ 150 }/>
            </div>
            <div className='AboutCIconContainer'>
                <img className='AboutCIcon' src='/CIcon.png' alt='C Icon' enablecssanimation='true' cssanimationgroup={ 10 } cssanimationdelay={ 150 }/>
            </div>
            <div className='AboutOCamlIconContainer'>
                <img className='AboutOCamlIcon' src='/OCamlIcon.png' alt='OCaml Icon' enablecssanimation='true' cssanimationgroup={ 11 } cssanimationdelay={ 150 }/>
            </div>
            <div className='AboutJavascriptIconContainer'>
                <img className='AboutJavascriptIcon' src='/JavascriptIcon.png' alt='Javascript Icon' enablecssanimation='true' cssanimationgroup={ 12 } cssanimationdelay={ 150 }/>
            </div>
        </div>;

    const technologiesIconRowContainer2 =
        <div className='AboutTechnologiesIconRowContainer2'>
            <div className='AboutHTMLIconContainer'>
                <img className='AboutHTMLIcon' src='/HTMLIcon.png' alt='HTML Icon' enablecssanimation='true' cssanimationgroup={ 13 } cssanimationdelay={ 300 }/>
            </div>
            <div className='AboutCSSIconContainer'>
                <img className='AboutCSSIcon' src='/CSSIcon.png' alt='CSS Icon' enablecssanimation='true' cssanimationgroup={ 14 } cssanimationdelay={ 150 }/>
            </div>
            <div className='AboutReactIconContainer'>
                <img className='AboutReactIcon' src='/ReactIcon.png' alt='React Icon' enablecssanimation='true' cssanimationgroup={ 15 } cssanimationdelay={ 150 }/>
            </div>
            <div className='AboutAndroidIconContainer'>
                <img className='AboutAndroidIcon' src='/AndroidIcon.png' alt='Android Icon' enablecssanimation='true' cssanimationgroup={ 16 } cssanimationdelay={ 150 }/>
            </div>
            <div className='AboutSpringBootIconContainer'>
                <img className='AboutSpringBootIcon' src='/SpringBootIcon.png' alt='Spring Boot Icon' enablecssanimation='true' cssanimationgroup={ 17 } cssanimationdelay={ 150 }/>
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
        </div>;

    const rowContainer = 
        <div className='AboutRowContainer'>
            { leftColumnContainer }
            { rightColumnContainer }
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
                    output.push({text: 'home projects', color: '#f5c743'})
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
                output.push({text: "    You're already here, silly."});
                output.push({text: ' '});
                output.push({text: '  projects', color: '#f5c743'});
                output.push({text: '    Change the current working directory to /projects. Contains information about my personal projects.'});
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
                { rowContainer }
        </TerminalController>
    );
}

export default About;