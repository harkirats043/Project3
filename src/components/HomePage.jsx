import { Link } from "react-router-dom";

import FoxPictures from "../pages/FoxPictures";
import DogsDetails from "../pages/DogsDetails";


export default function Homepage() {
    return (
        <div>
            <h2>This is my Hompage</h2>
            <Link to="/">
                <div>Homepage</div>
            </Link>
            <Link to="/FoxPictures">
                <div>Random Fox Pictures</div>
            </Link>
            <Link to="/DogDetails">
                <div>Random Dogs Pictures</div>
            </Link>
        </div>
    )
}