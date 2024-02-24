function ModeToggler() {

    let darkModeOn = true;
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>light mode is on</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (!darkModeOn==true) {
            console.log("Dark mode is on");
        } else {
            console.log("light mode is on");
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}


export default ModeToggler;