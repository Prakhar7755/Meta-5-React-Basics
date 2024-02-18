import avatar from "./avatar.png"

// styling the element
const styleLogo = {
    height:"50vh",
    width:"50vw",
}

function Logo(props) { // can be put into a differnt logo.js file
    const userPic = <img src={avatar} style={styleLogo} />
    return userPic;
}
export default Logo;

/*
True or false? When using an img element in your React component, you can set the value of the src attribute using a JSX expression.
True
Correct. You can set the value of the src attribute using a JSX expression?
*/


// I NEED TO FIX THE SIZE OF THE IMAGE AS WELL