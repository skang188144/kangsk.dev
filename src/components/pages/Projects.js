import { useState } from "react"
import './Projects.css';

const Projects = () => {
    const [input, setInput] = useState('')

    const onChange = (event) => {
        setInput(event.target.value)
    }

    const onEnter = (event) => {
        if (event.key === "Enter") {
            window.alert("test")
        }
    }

    return (
        <>
            <div className='Terminal'>
                <input 
                    type='text' 
                    value={input}
                    onChange={onChange}
                    onKeyDown={onEnter}/>
            </div>
        </>
    );
}

export default Projects;