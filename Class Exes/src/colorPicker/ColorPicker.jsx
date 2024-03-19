import {useState} from 'react';
import './ColorPicker.css';

function ColorPicker() {
    const [color,setColor]=useState(null);
    return (
        <div className="ColorPicker">
            <p>Clicking on one of the buttons should paint the "TEXT" in the color it represents.</p>
            <div className="buttons">
                <button onClick={() => setColor("Red")} >Red</button>
                <button onClick={() => setColor("Green")}>Green</button>
                <button onClick={() => setColor("blue")}>Blue</button>
            </div>
            <div className="text" >
                <div className="text" style={{ color: color }}>
                {color}
            </div>
            </div>
        </div>
    );
}

export default ColorPicker;