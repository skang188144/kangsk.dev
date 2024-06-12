import { useEffect, useState, useRef } from "react"
import './TerminalComponent.css';

const TerminalComponent = ({prompt, children, initialInput, handleGlobalAndPageSpecificCommands, terminalLines}) => {
    const [input, setInput] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const cursorRef = useRef(null);

    // Set the starting input value
    useEffect(() => {
        setInput(initialInput.trim())
    }, [initialInput]);

    // Scroll down when the user presses enter and new output appears
    useEffect(() => {
        setTimeout(cursorRef?.current?.scrollIntoView({ behavior: "auto", block: "nearest" }), 500);
    }, [children]);

    // Scroll down when the user inputs anything, even without pressing enter
    useEffect(() => {
        setTimeout(cursorRef?.current?.scrollIntoView({ behavior: "auto", block: "nearest" }), 500);
    }, [input]);

    // Attach click listener to focus the hidden input box at all times the user is clicking anywhere on the site contents
    useEffect(() => {
        if (handleGlobalAndPageSpecificCommands == null) {
            return;
        }

        const terminal = document.getElementsByClassName('Terminal')[0];
        const listener = (() => (terminal?.querySelector('.TerminalHiddenInput'))?.focus());

        terminal.addEventListener('click', listener);

        return () => {
            terminal.removeEventListener('click', listener.listener);
        }
    }, [handleGlobalAndPageSpecificCommands]);

    /*
     * Utility Functions
     */

    const clamp = (value, min, max) => {
        if (value > max) return max;
        if (value < min) return min;
        return value;
    }

    // Calculates the total width in pixels of the characters to the right of the cursor.
    // Create a temporary span element to measure the width of the characters.
    const calculateInputWidth = (inputElement, chars) => {
        const span = document.createElement('span');
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        span.style.fontSize = window.getComputedStyle(inputElement).fontSize;
        span.style.fontFamily = window.getComputedStyle(inputElement).fontFamily;
        span.innerText = chars;
        document.body.appendChild(span);
        const width = span.getBoundingClientRect().width;
        document.body.removeChild(span);
        // Return the negative width, since the cursor position is to the left of the input suffix
        return -width;
    }

    const handleTerminalInput = (event) => {
        if (event.key === "Enter") {
            handleGlobalAndPageSpecificCommands(input);
            setCursorPosition(0);
            setInput("");
            return;
        } else if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === 'Delete') {
            const inputElement = event.currentTarget;

            let charsToRightOfCursor = "";
            let cursorIndex = input.length - (inputElement.selectionStart || 0);
            cursorIndex = clamp(cursorIndex, 0, input.length);

            switch (event.key) {
                case 'ArrowLeft':
                    if (cursorIndex > input.length - 1) cursorIndex--;
                    charsToRightOfCursor = input.slice(input.length - 1 - cursorIndex);
                    break;
                case 'ArrowRight': case 'Delete':
                    /*
                     * TODO: fix issue with Ctrl + Delete
                     */
                    charsToRightOfCursor = input.slice(input.length - cursorIndex + 1);
                    break;
                case 'ArrowUp':
                    charsToRightOfCursor = input.slice(0);
                    break;
                default:
                    break;
            }

            const inputWidth = calculateInputWidth(inputElement, charsToRightOfCursor);
            setCursorPosition(inputWidth);
        } 
    }

    return (
        <div className='Terminal'>
            <div className="TerminalContainer">
                { children }
                <div className="TerminalLine TerminalPrompt TerminalCursorContainer" prompt={ prompt }>
                    { input }
                    <span ref={ cursorRef } className="TerminalCursor" style={{ left: `${cursorPosition + 1}px` }}></span>
                </div>
            </div>
            <input className="TerminalHiddenInput" value={ input } autoFocus={ true } onChange={ (event) => {setInput(event.target.value)} } onKeyDown={ handleTerminalInput }/>
        </div>
      );
}

export default TerminalComponent;