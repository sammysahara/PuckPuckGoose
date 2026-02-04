import './css/index.css'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/" className="nav-home">Home</Link>
            <Link to="/Players" className="nav-option">Players</Link>
            <Link to="/Teams" className="nav-option">Teams</Link>
            <Link to="/Misc" className="nav-option">Misc</Link>
        </div>
    )
}

export default Navbar
