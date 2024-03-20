import { useState } from 'react';

function StatefulComponent() {
    const [greet, setGreet] = React.useState('hi');

    return (
        <div>
            <h1>A state value : {greet}</h1>
        </div>
    )

}
export default StatefulComponent;