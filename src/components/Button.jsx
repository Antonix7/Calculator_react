import './Button.css'

export default function Button({clickButton, name, gray, orange, wide, green}) {
    
    const handleClick = () => clickButton(name)

    const className = [
        "button-style",
        gray ? "gray" : "",
        orange ? "orange" : "",
        wide ? "wide" : "",
        green ? "green" : ""
    ]

    return(
        <div className={className.join("").trim()}>
            <button className="btn" onClick={clickButton}>{name}</button>
        </div>
    );
}