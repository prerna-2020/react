import { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState('#ffffff');

 
    return (  
    <>
        <div className="container">
            <h2>Color Picker</h2>
            <div  className="selectedBlock" style={{backgroundColor:color}}>
                <div id="selected">
                    <p> Selected Color</p>
                    <p> {color}</p>
                </div>
            </div>
            <div className="inputBlock">
                <label>Select Color</label>
                <input type="color" id="colorSelect" name="colorSelect" value={color}  onChange={(e)=>setColor(e.target.value)}/>       
            </div>
        </div>
    </>
    );
}

export default ColorPicker;