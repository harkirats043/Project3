export default function Footer(){
    return(
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-gray p-6 flex justify-around items-center">
            <a href="https://www.linkedin.com/in/harkirat-singh-hanzra/" target="_blank" rel="noopener noreferrer" className="text-center">
                <i className="fab fa-linkedin text-4xl mb-2"></i>
                <p className="p-1.5 hover:bg-purple-400 cursor-pointer font-mono">LinkedIn</p>
            </a>
            <a href="https://github.com/harkirats043/Project3" target="_blank" rel="noopener noreferrer" className="text-center">
                <i className="fab fa-github text-4xl mb-2"></i>
                <p className="p-1.5 hover:bg-purple-400 cursor-pointer font-mono">GitHub</p>
            </a>
        </div>
    )
}
