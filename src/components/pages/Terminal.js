import { useState } from "react"
import TerminalComponent from '../TerminalComponent';
import '../TerminalComponent.css';

const Terminal = () => {
    const [terminalLineData, setTerminalLineData] = useState([<div className="TerminalLineWrapper">Welcome to the demo</div>])

    return (
        <TerminalComponent prompt='guest@kangsk.dev:~$' onInput={ terminalInput => {
            let newData = [...terminalLineData]
            newData.push(<div terminalprompt='guest@kangsk.dev:~$' className="TerminalLineWrapper TerminalLinePromptWrapper">{ terminalInput }</div>)
            setTerminalLineData(newData)
            }}>
            { terminalLineData }
        </TerminalComponent>
    );
}

export default Terminal;