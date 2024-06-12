import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TerminalComponent from "./TerminalComponent";
import './TerminalController.css';
import { scheduleAnimations } from "../Animations";

const TerminalController = ({prompt, children, initialInput, handlePageSpecificCommands}) => {
    const [terminalLines, setTerminalLines] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        scheduleAnimations();
        // triggerDeleteAnimations();
    }, []);
    

    const handleGlobalAndPageSpecificCommands = (input) => {
        let newTerminalLines = pushMirroredInput(input, terminalLines);
        
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
                const pageSpecificOutput = handlePageSpecificCommands(command, args);
            
                if (pageSpecificOutput.length === 0) {
                    newTerminalLines = pushOutputToTerminalLines({text: command.concat(": command not found. Type 'help' for a list of commands to use.")}, newTerminalLines);
                } else {
                    newTerminalLines = pushOutputListToTerminalLines(pageSpecificOutput, newTerminalLines);
                }

                break;
        }

        setTerminalLines(newTerminalLines);
    }

    const pushMirroredInput = (input, terminalLines) => {
        let inputEnteredList = [...terminalLines];
        inputEnteredList.push(<div className="TerminalLine TerminalPrompt" key={'TerminalLine' + inputEnteredList.length.toString()} prompt={ prompt }>{ input }</div>);
        return inputEnteredList;
    }

    const pushOutputToTerminalLines = (output, terminalLines) => {
        let newTerminalLines = [...terminalLines];
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()} style={{color: output.color}}>{ output.text }</div>);
        return newTerminalLines;
    }

    const pushOutputListToTerminalLines = (outputList, terminalLines) => {
        let newTerminalLines = [...terminalLines]
        for (const output of outputList) {
            newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()} style={{color: output.color}}>{ output.text }</div>);
        }
        return newTerminalLines;
    }

    return (
        <TerminalComponent 
            prompt = { prompt } 
            initialInput = { initialInput }
            handleGlobalAndPageSpecificCommands = { handleGlobalAndPageSpecificCommands }
            terminalLines = { terminalLines }>
                { children }
                { terminalLines }
        </TerminalComponent>
    );
}

export default TerminalController;