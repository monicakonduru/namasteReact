import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SwiggyFooter from "./Footer";
import Navbar from "./Navbar";
import BodyComponent from "./Body";

const Body = () => (
    <div>
        <Navbar />
        <div className="container px-4 px-md-5 mt-4">
            <div className="mt-4">
                <BodyComponent />
            </div>
        </div>
        <SwiggyFooter />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Body />);
