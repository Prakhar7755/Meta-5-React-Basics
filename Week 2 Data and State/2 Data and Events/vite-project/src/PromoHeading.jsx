
function PromoHeading(props) {
    return (
        // <h1>90% off sale!</h1> old way
        <div>
            <h1>{props.heading}</h1>
            <h1>{props.callToAction}</h1>
        </div>
    )
}

export default PromoHeading;
