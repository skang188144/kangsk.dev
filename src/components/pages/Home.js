import { useState } from "react";
import './Home.css';

const Home = () => {

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
        <div className='Terminal'>
            <div className="Prompt">guest@kangsk.dev:/home$</div>
            <input 
                type='text' 
                value={input}
                onChange={onChange}
                onKeyDown={onEnter}/>
            <div className="BlockCaret"></div>
        </div>
    );
}

export default Home;