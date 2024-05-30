import { useEffect, useState, useRef } from "react"
import './TerminalComponent.css';

const TerminalComponent = ({prompt, height = "600px", onInput, children, startingInputValue = "", scrollToPosition = true}) => {
    const [input, setInput] = useState('')
    const [cursorPosition, setCursorPosition] = useState(0)
    const scrollIntoViewRef = useRef(null)

    /*
     * useEffect() hooks 
     */

    // Set the starting input value
    useEffect(() => {
        setInput(startingInputValue.trim())
    }, [startingInputValue])

    // Scroll down when the user presses enter and new output appears
    useEffect(() => {
        setTimeout(scrollIntoViewRef?.current?.scrollIntoView({ behavior: "auto", block: "nearest" }), 500);
    }, [children])

    // Scroll down when the user inputs anything, even without pressing enter
    useEffect(() => {
        setTimeout(scrollIntoViewRef?.current?.scrollIntoView({ behavior: "auto", block: "nearest" }), 500);
    }, [input])

    // Play typing animation for initial text
    useEffect(() => {
        triggerTypeAnimation('°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸');
    }, [])

    // Attach click listener to focus the hidden input box at all times the user is clicking anywhere on the site contents
    useEffect(() => {
        if (onInput == null) {
            return;
        }

        const terminalWrapper = document.getElementsByClassName('TerminalWrapper')[0];

        const listener = (() => (terminalWrapper?.querySelector('.TerminalHiddenInput'))?.focus());

        terminalWrapper.addEventListener('click', listener);

        return () => {
            terminalWrapper.removeEventListener('click', listener.listener);
        }
    }, [onInput]);

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
    };

    /*
     * Input Functions
     */

    const updateInput = (event) => {
        setInput(event.target.value)
    }

    const handleInput = (event) => {
        if (event.key === "Enter") {
            onInput(input)
            setCursorPosition(0)
            setInput("")
            return;
        } else if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === 'Delete') {
            const inputElement = event.currentTarget;

            let charsToRightOfCursor = "";
            let cursorIndex = input.length - (inputElement.selectionStart || 0);
            cursorIndex = clamp(cursorIndex, 0, input.length);

            if (event.key === 'ArrowLeft') {
                if(cursorIndex > input.length - 1) cursorIndex--;
                charsToRightOfCursor = input.slice(input.length - 1 - cursorIndex);
            }
            else if (event.key === 'ArrowRight' || event.key === 'Delete') {
                charsToRightOfCursor = input.slice(input.length - cursorIndex + 1);
            }
            else if (event.key === 'ArrowUp') {
                charsToRightOfCursor = input.slice(0)
            }

            const inputWidth = calculateInputWidth(inputElement, charsToRightOfCursor);
            console.log('charsToRightOfCursor: ' + charsToRightOfCursor);
            setCursorPosition(inputWidth);
        } 
    }

    async function triggerTypeAnimation (typedValue) {
        for (let i = 0; i < typedValue.length; i++) {
            await setTimeout(setInput, 200 + i * 75, typedValue.slice(0, i + 1));
        }
    }

    return (
        <div className={ 'TerminalWrapper' }>
            <div className="Terminal">
                { children }
                <div className="TerminalLineWrapper TerminalLinePromptWrapper TerminalLineCursorWrapper" terminalprompt={ prompt || '$' }>
                    { input }
                    <span ref={ scrollIntoViewRef } className="TerminalLineCursor" style={{ left: `${cursorPosition + 1}px` }}></span>
                    </div>
            </div>
            <input className="TerminalHiddenInput" value={ input } autoFocus={ onInput != null } onChange={ updateInput } onKeyDown={ handleInput }/>
        </div>
      );
}

export default TerminalComponent;