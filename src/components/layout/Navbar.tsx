import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";


const Navbar = () => {
    return (
        <div className="flex items-center gap-4 h-16 px-3 mx-auto max-w-7xl">
            <h1 className="font-extrabold size-10">Logo</h1>
            <Link to='/'>Tasks</Link>
            <Link to='/users'>Users</Link>

            <div className="ml-auto">
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;