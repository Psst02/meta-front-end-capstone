import './Button.css';

export default function Button({ text, url }) {
    function clickHandler() {

    }
    return (
        <button onClick={clickHandler}>{text}</button>
    );
}