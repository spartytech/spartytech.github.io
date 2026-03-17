
export default function Navigation(){
    return(
    
      <nav className="flex p-6 justify-between">
        <div>
          <ul className="flex gap-2 ">
            <li>Home</li>
            <li>Contact</li>
            <li>About Me</li>
          </ul>
        </div>
        <button>View My Work</button>
      </nav>
    );
}