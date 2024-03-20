//https://www.coursera.org/learn/react-basics/lecture/jBgei/parent-child-data-flow
import PromoHeading from './PromoHeading'
const data = {
    heading: "99% off on all items!",
    callToAction: "Everything must go!",
}
function Promo() { // Parent componet

    // new way to pass and edit everything with ease
    return (
        <div>
            <PromoHeading
                heading={data.heading}
                callToAction={data.callToAction}
            />
        </div>
    )
}

export default Promo;




/*                  OLD WAY OF SINGLE CHILD COMPONENT
return (
    <div>
    <PromoHeading />    CHILD COMPOENT 
    </div>
    )
*/