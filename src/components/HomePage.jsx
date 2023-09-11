import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import Footer from "./Footer";

export default function Homepage() {
    const { isLoading, isAuthenticated } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading indicator while authentication state is being determined.
    }

    return (
        <div className="text-center">
            <Link to="/">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 w-full h-24 my-0 font-mono font-extrabold text-3xl sm:text-4xl max-md flex items-center justify-center">Foxes & Dogs Glore! </div>
            </Link>

            {isAuthenticated ? (
                <>
                    <div>
                        <LogoutButton />
                    </div>

                    <div className="sm:flex sm:justify-center ">
                        <Link to="/FoxPictures">
                            <div className="absolute top-25 left-20 max-sm:top-15 max-sm:left-2 text-[18px] sm:text-[24px] bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 sm:py-1.5 sm:px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition-all duration-300"> Fox Images</div>
                        </Link>
                        <Link to="/DogsDetails">
                            <div className="absolute top-25 right-20 max-sm:top-15 max-sm:right-2 text-[18px] sm:text-[24px] bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 sm:py-1.5 sm:px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition-all duration-300"> Dog Images</div>
                        </Link>
                    </div>

                </>
            ) : (
                <div>
                    <LoginButton />
                    <Footer />
                </div>
            )}
        </div>
    );
}
