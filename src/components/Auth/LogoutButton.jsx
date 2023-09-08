import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton(){
    const{ logout } = useAuth0()

    return (<button className="bg-blue-500 mt-2 hover:bg-blue-800 text-white font-bold py-1.5 px-4 rounded-full"
        onClick={()=>logout()}>Log Out</button>)

}