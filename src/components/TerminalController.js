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
                if (args.length !== 0) {
                    newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                } else {
                    navigate('/');
                }
                break;    
            case 'about':
                if (args.length !== 0) {
                    newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                } else {
                    navigate('/about');
                }
                break;    
            case 'projects':
                if (args.length !== 0) {
                    newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                } else {
                    navigate('/projects');
                }
                break;    
            case 'socials':
                if (args.length > 1) {
                    newTerminalLines = pushTooManyArgumentsOutput(command, args[1], newTerminalLines);
                } else if (args.length === 1 && args[0] !== '-a'){
                    newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                } else {
                    newTerminalLines = pushSocialsOutput(newTerminalLines);
                }
                break;
            case 'cd':
                if (args.length === 0) {
                    newTerminalLines = pushTooLittleArgumentsOutput(command, newTerminalLines);
                    break;
                } else if (args.length > 1) {
                    newTerminalLines = pushTooManyArgumentsOutput(command, args[1], newTerminalLines);
                    break;
                }

                switch (args[0]) {
                    case 'home':
                        navigate('/');
                        break;
                    case 'about':
                        navigate('/about');
                        break;
                    case 'projects':
                        navigate('/projects');
                        break;
                    default:
                        newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                        break;
                }
            
                break;
            case 'clear':
                if (args.length !== 0) {
                    newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                    break;
                }

                newTerminalLines = pushOutputListToTerminalLines(Array(200).fill({text: ' '}), newTerminalLines);
                break;
            case 'source':
                if (args.length !== 0) {
                    newTerminalLines = pushInvalidArgumentOutput(command, args[0], newTerminalLines);
                }

                window.location.replace('https://www.github.com/skang188144/kangsk.dev');
                break;
            // case 'pokemon-ai':
            //     navigate('/pokemon-ai');
            //     break;
            // case 'terminal':
            //     navigate('/terminal');
            //     break;
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
        let newTerminalLines = [...terminalLines];
        for (const output of outputList) {
            newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()} style={{color: output.color}}>{ output.text }</div>);
        }
        return newTerminalLines;
    }

    const pushInvalidArgumentOutput = (cmd, arg, terminalLines) => {
        let newTerminalLines = [...terminalLines];
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}>{ arg + ": invalid argument. Type 'help " + cmd + "' for the proper usage." }</div>);
        return newTerminalLines;
    }

    const pushTooManyArgumentsOutput = (cmd, arg, terminalLines) => {
        let newTerminalLines = [...terminalLines];
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}>{ arg + ": too many arguments. Type 'help " + cmd + "' for the proper usage." }</div>);
        return newTerminalLines;
    }

    const pushTooLittleArgumentsOutput = (cmd, terminalLines) => {
        let newTerminalLines = [...terminalLines];
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}>{ cmd + ": missing arguments. Type 'help " + cmd + "' for the proper usage." }</div>);
        return newTerminalLines;
    }

    const pushSocialsOutput = (terminalLines) => {
        let newTerminalLines = [...terminalLines];
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()} style={{color: '#f5c743'}}>Socials: </div>);
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}> </div>);
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}><a href='https://www.github.com/skang188144' style={{width: 'fit-content', paddingLeft: '0'}}>{ '  GitHub @skang188144' }</a></div>);
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}> </div>);
        newTerminalLines.push(<div className="TerminalLine" key={'TerminalLine' + newTerminalLines.length.toString()}><a href='https://www.linkedin.com/in/kangsk' style={{width: 'fit-content', paddingLeft: '0'}}>{ '  LinkedIn @kangsk' }</a></div>);
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