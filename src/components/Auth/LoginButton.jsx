import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton(){
    const{ loginWithRedirect } = useAuth0()

    return (<button  className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1.5 px-4 rounded-full"
    onClick={()=>loginWithRedirect()}>Log In</button>)

}