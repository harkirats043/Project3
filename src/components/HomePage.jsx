import { Link } from "react-router-dom";


export default function Homepage() {
    return (
        <div>
            <Link to="/">
                <div>Homepage</div>
            </Link>
            <Link to="/FoxPictures">
                <div>Random Fox Pictures</div>
            </Link>
            <Link to="/DogsDetails">
                <div>Random Dogs Pictures</div>
            </Link>
        </div>
    )
}