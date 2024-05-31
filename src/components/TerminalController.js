import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TerminalComponent from "./TerminalComponent";
import './TerminalController.css';

const TerminalController = ({prompt, initialInput, initialDisplayTitle, initialDisplayText, overrideInitialDisplay, overrideInitialDisplayElement}) => {
    let initialDisplayElements = null;
    let navigate = useNavigate();

    const createInitialDisplayTitleElements = (titleList) => {
        titleList = titleList.map(title => {
            return (<div className='InitialDisplayTitle'>{ title }</div>);
        });

        return titleList;
    }

    const createInitialDisplayTextElements = (textList) => {
        textList = textList.map(text => {
            return (<div className="InitialDisplayText">{ text }</div>);
        });

        return textList;
    }

    if (overrideInitialDisplay) {
        initialDisplayElements = [overrideInitialDisplayElement];
    } else {
        const initialDisplayTitleElements = createInitialDisplayTitleElements(initialDisplayTitle);
        const initialDisplayTextElements = createInitialDisplayTextElements(initialDisplayText);
        initialDisplayElements = [...initialDisplayTitleElements, ...initialDisplayTextElements]
    }
    
    const [terminalLines, setTerminalLines] = useState(initialDisplayElements);

    const onInputEntered = (input) => {
        let newTerminalLines = pushInputEntered(input, terminalLines);

        switch (input.split(' ')[0]) {
            case 'help':
                newTerminalLines = pushOutput('kangsk.dev bash, version 1.8.14(1)-release (x86_64-pc-linux-gnu)', newTerminalLines, '#0f0');
                newTerminalLines = pushOutput("These shell commands are defined internally.  Type `help' to see this list.", newTerminalLines, '#0f0');
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('Quick Navigation:', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  home', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput("    You're already here, silly.", newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  about', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    Change the current working directory to /about. Contains information about who I am and what I do.', newTerminalLines);
                newTerminalLines = pushOutput('    ', newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  projects', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    Change the current working directory to /projects. Contains information about my personal projects.', newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  pokemon-ai', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    Change the current working directory to /pokemon-ai. Watch an AI play Pokemon!', newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  terminal', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    Change the current working directory to /terminal. Access a real Linux terminal.', newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('Miscellaneous Information:', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput(' ', newTerminalLines)
                newTerminalLines = pushOutput('  socials [-a]', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    List all social media handles', newTerminalLines)
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('General Commands:', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  ls', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput("    List the current working directory's contents", newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  cat [file]', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    Concatenate files and print on the standard output', newTerminalLines);
                newTerminalLines = pushOutput(' ', newTerminalLines);
                newTerminalLines = pushOutput('  cd [dir]', newTerminalLines, '#00B2CA');
                newTerminalLines = pushOutput('    Change the current working directory to DIR', newTerminalLines);
                break;
            case 'home':
                navigate('/');
                break;
            case 'about':
                navigate('/about');
                break;
            case 'projects':
                navigate('/projects');
                break;
            case 'pokemon-ai':
                navigate('/pokemon-ai');
                break;
            case 'terminal':
                navigate('/terminal');
                break;
            case '':
                break;
            default:
                newTerminalLines = pushOutput(input + ": command not found. Type 'help' for a list of commands to use.", newTerminalLines);
                break;
        }

        setTerminalLines(newTerminalLines);
    }

    const pushInputEntered = (input, terminalLines) => {
        let inputEnteredList = [...terminalLines];
        inputEnteredList.push(<div className="TerminalLine TerminalPrompt" prompt={ prompt }>{ input }</div>);
        return inputEnteredList;
    }

    const pushOutput = (output, terminalLines) => {
        let outputList = [...terminalLines];
        outputList.push(<div className="TerminalLine" style={{color: output.color}}>{ output.text }</div>);
        return outputList;
    }

    return (
        <TerminalComponent 
            prompt = { prompt } 
            initialInput = { initialInput }
            onInputEntered = { onInputEntered }
            terminalLines = { terminalLines }>
        </TerminalComponent>
    );
}

export default TerminalController;