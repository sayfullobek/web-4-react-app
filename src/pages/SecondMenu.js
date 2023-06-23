import { Link } from "react-router-dom";

function SecondMenu(){
    
    function alertcha(){
        alert("salom")
    }

    function bose(){
        alert("ikki marta bosding qozi")
    }

    return(
        <div>
            <Link to="/">asosit menuga o'tish</Link>
            <button onClick={alertcha} className="btn btn-primary">alert</button>
            <button className="btn" onDoubleClick={bose}>bose</button>
        </div>
    )
}

export default SecondMenu;