import { Link } from "react-router-dom";


export default function Homepage() {
    return (
        <div className="text-center">
            <Link to="/">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 w-full h-15 my-2 font-mono font-extrabold text-[56px] ">Homepage</div>
            </Link>
            <Link to="/FoxPictures">
                <div className="absolute top-25 left-20 text-[24px] bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">Random Fox Pictures</div>
            </Link>
            <Link to="/DogsDetails">
                <div className="absolute top-30 right-20 text-[24px]  bg-blue-500 hover:bg-blue-400 text-white py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">Random Dogs Pictures</div>
            </Link>
        </div>
    )
}