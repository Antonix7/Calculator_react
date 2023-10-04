import Button from "./Button.jsx";
import './ButtonsCard.css'

export default function ButtonsPanel({clickButton}) {
    const handleClick = buttonValue => clickButton(buttonValue)

    return(
        <div className="buttons-panel-style">
            <div>
                <Button name="AC" clickButton={handleClick} gray/>
                <Button name="+/-" clickButton={handleClick} gray/>
                <Button name="%" clickButton={handleClick} gray/>
                <Button name="/" clickButton={handleClick} orange/>
            </div>
            <div>
                <Button name="7" clickButton={handleClick}/>
                <Button name="8" clickButton={handleClick}/>
                <Button name="9" clickButton={handleClick}/>
                <Button name="x" clickButton={handleClick} orange/>
            </div>
            <div>
                <Button name="4" clickButton={handleClick}/>
                <Button name="5" clickButton={handleClick}/>
                <Button name="6" clickButton={handleClick}/>
                <Button name="-" clickButton={handleClick} orange/>
            </div>
            <div>
                <Button name="1" clickButton={handleClick}/>
                <Button name="2" clickButton={handleClick}/>
                <Button name="3" clickButton={handleClick}/>
                <Button name="+" clickButton={handleClick} orange/>
            </div>
            <div>
                <Button name="0" clickButton={handleClick} wide/>
                <Button name="." clickButton={handleClick}/>
                <Button name="=" clickButton={handleClick} green/>
            </div>
        </div>
    );
}