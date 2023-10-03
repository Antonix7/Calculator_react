import Button from "./Button.jsx";

export default function ButtonsPanel({clickButton}) {
    const handleClick = buttonValue => clickButton(buttonValue)

    return(
        <div>
            <div>
                <Button name="AC" clickButton={handleClick}/>
                <Button name="+/-" clickButton={handleClick}/>
                <Button name="%" clickButton={handleClick}/>
                <Button name="/" clickButton={handleClick}/>
            </div>
            <div>
                <Button name="7" clickButton={handleClick}/>
                <Button name="8" clickButton={handleClick}/>
                <Button name="9" clickButton={handleClick}/>
                <Button name="x" clickButton={handleClick}/>
            </div>
            <div>
                <Button name="4" clickButton={handleClick}/>
                <Button name="5" clickButton={handleClick}/>
                <Button name="6" clickButton={handleClick}/>
                <Button name="-" clickButton={handleClick}/>
            </div>
            <div>
                <Button name="1" clickButton={handleClick}/>
                <Button name="2" clickButton={handleClick}/>
                <Button name="3" clickButton={handleClick}/>
                <Button name="+" clickButton={handleClick}/>
            </div>
            <div>
                <Button name="0" clickButton={handleClick}/>
                <Button name="." clickButton={handleClick}/>
                <Button name="=" clickButton={handleClick}/>
            </div>
        </div>
    );
}