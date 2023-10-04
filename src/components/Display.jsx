import './Display.css'

export default function Display({value}) {
    return(
        <div className='Display-style'>
            <div>
                {value}
            </div>
        </div>
    );
}