// Button for seeing event handeling
function Btn() {
    const clickHandler = () => console.log("Clicked");

    return (
        <button onClick={clickHandler}>
            Click me
        </button>
    )
}
export default Btn;