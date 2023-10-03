export default function Button({clickButton, name}) {
    
    const handleClick = () => clickButton(name)

    return(
        <div>
            <button onClick={clickButton}>{name}</button>
        </div>
    );
}