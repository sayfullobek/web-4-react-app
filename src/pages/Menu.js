import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Menu(){
    function toastChiqar(){
        toast.success("malladess")
    }
    return(
        <div className="text-center text-primary">
            <Link to={"/second"}>ikkinchi menuga o'tish</Link>
           <button onClick={toastChiqar} className="btn btn-success">toast chiqar qozi</button>
           <button onClick={()=>toast.error("xato qilding qozi")} className="btn btn-danger">toast chiqar qozi</button>
           <button onClick={()=>toast.warning("iltimos togri kirit qozi")} className="btn btn-warning">toast chiqar qozi</button>
        </div>
    )
}

export default Menu;