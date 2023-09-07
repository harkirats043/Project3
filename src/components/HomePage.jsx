import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";

export default function Homepage() {
    // const {isLoading,isAuthenticated} = useAuth0()

    return (

        <div className="text-center">
            <Link to="/">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 w-full h-15 my-2 font-mono font-extrabold text-[56px] max-md ">Homepage</div>
            </Link>
            <div>
                <LoginButton /><br></br>
                <LogoutButton />
            </div>
            <div className="sm:flex sm:justify-center">
            <Link to="/FoxPictures">
                <div className="absolute top-25 left-20 max-sm:top-15 max-sm:left-2 text-[24px] bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Fox Images</div>
            </Link>
            <Link to="/DogsDetails">
                <div className="absolute top-30 right-20 max-sm:top-15 max-sm:right-2 text-[24px]  bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">Dog Images</div>
            </Link>
        </div>
        </div>
    )
}