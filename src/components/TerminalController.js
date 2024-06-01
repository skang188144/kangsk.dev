import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TerminalComponent from "./TerminalComponent";
import './TerminalController.css';

const TerminalController = ({prompt, initialInput, initialDisplayTitle, initialDisplayText, getPageSpecificCommandOutput, overrideInitialDisplayTitle, overrideInitialDisplayText, overrideInitialDisplayElement}) => {
    let initialDisplayElements = [];
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

    if (overrideInitialDisplayTitle || overrideInitialDisplayText) {
        initialDisplayElements = [...initialDisplayElements, overrideInitialDisplayElement];
    }

    if (!overrideInitialDisplayTitle) {
        const initialDisplayTitleElements = createInitialDisplayTitleElements(initialDisplayTitle);
        initialDisplayElements = [...initialDisplayElements, ...initialDisplayTitleElements];
    }

    if (!overrideInitialDisplayText) {
        const initialDisplayTextElements = createInitialDisplayTextElements(initialDisplayText);
        initialDisplayElements = [...initialDisplayElements, ...initialDisplayTextElements];
    }
    
    const [terminalLines, setTerminalLines] = useState(initialDisplayElements);

    const onInputEntered = (input) => {
        let newTerminalLines = pushInputEntered(input, terminalLines);
        
        const inputList = input.split(' ');
        const command = inputList[0];
        const args = inputList.slice(1, inputList.length);

        switch (command) {
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
                const pageSpecificOutput = getPageSpecificCommandOutput(command, args);
            
                if (pageSpecificOutput.length === 0) {
                    newTerminalLines = pushOutput({text: command.concat(": command not found. Type 'help' for a list of commands to use.")}, newTerminalLines);
                } else {
                    newTerminalLines = pushOutputList(pageSpecificOutput, newTerminalLines);
                }

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
        let newTerminalLines = [...terminalLines];
        newTerminalLines.push(<div className="TerminalLine" style={{color: output.color}}>{ output.text }</div>);
        return newTerminalLines;
    }

    const pushOutputList = (outputList, terminalLines) => {
        let newTerminalLines = [...terminalLines]
        for (const output of outputList) {
            newTerminalLines.push(<div className="TerminalLine" style={{color: output.color}}>{ output.text }</div>);
        }
        return newTerminalLines;
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