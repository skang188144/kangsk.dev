import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TerminalComponent from "./TerminalComponent";
import './TerminalController.css';

const TerminalController = ({prompt, children, initialInput, getPageSpecificCommandOutput}) => {
    const [terminalLines, setTerminalLines] = useState();

    let navigate = useNavigate();

    useEffect(() => {
        triggerTypeAnimations();
        triggerDeleteAnimations();
    }, []);
    

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

    const triggerTypeAnimation = (element) => {
        let text = element.getAttribute('typeAnimationText');
        let delayBetween = element.getAttribute('typeAnimationDelayBetween');
        let i = 0;

        if (delayBetween === null) {
            delayBetween = 20;
        }

        const typingInterval = setInterval(() => {
            if (i === 0) {
                element.innerHTML = '';
            }

            if (i < text.length) {
                element.innerHTML = element.innerHTML + text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, delayBetween);
    }

    const triggerDeleteAnimation = (element) => {
        let text = element.innerHTML;
        let delayBetween = element.getAttribute('deleteAnimationDelayBetween');
        let i = 0;

        if (delayBetween === null) {
            delayBetween = 20;
        }

        const deleteInterval = setInterval(() => {
            if (i < text.length) {
                element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 1);
                i++;
            } else {
                clearInterval(deleteInterval);
            }
        }, delayBetween);
    }

    const triggerTypeAnimations = () => {
        console.log();

        const elements = document.body.querySelectorAll("[enableTypeAnimation=true]");
        let typeAnimationElements = [];
        
        for (const element of elements) {
            if (element.getAttribute('typeAnimationText' === null)) {
                continue;
            }

            typeAnimationElements.push(element);
        }

        for (const typeAnimationElement of typeAnimationElements) {
            let delay = Number(typeAnimationElement.getAttribute('typeAnimationDelay'));

            if (delay !== 0 && delay !== null) {
                setTimeout(() => {triggerTypeAnimation(typeAnimationElement)}, delay, typeAnimationElement);
            } else {
                triggerTypeAnimation(typeAnimationElement);
            }
        }
    }

    const triggerDeleteAnimations = () => {
        const deleteAnimationElements = document.body.querySelectorAll("[enableDeleteAnimation=true]");

        for (const deleteAnimationElement of deleteAnimationElements) {
            let delay = Number(deleteAnimationElement.getAttribute('deleteAnimationDelay'));

            if (delay !== 0 && delay !== null) {
                setTimeout(() => {triggerDeleteAnimation(deleteAnimationElement)}, delay, deleteAnimationElement);
            } else {
                triggerDeleteAnimation(deleteAnimationElement);
            }
        }
    }

    return (
        <TerminalComponent 
            prompt = { prompt } 
            initialInput = { initialInput }
            onInputEntered = { onInputEntered }
            terminalLines = { terminalLines }>
                { children }
                { terminalLines }
        </TerminalComponent>
    );
}

export default TerminalController;