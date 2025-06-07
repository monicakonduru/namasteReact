import React from "react";
import ReactDOM from "react-dom/client";

//Element
const heading = (<h1 id="heading">Namaste React with JSX!</h1>)

//Component
const Body = () => {
    return (
        <div>
            {heading}
            <h1>Hello from the Body component!</h1>
            <p>This is some JSX content inside the Body.</p>
            <button>Click Me</button>
            {
                //Using js inside jsx
                <h1>Performing calculation using js (5+2): {5+2}</h1>
            }
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Body />);
