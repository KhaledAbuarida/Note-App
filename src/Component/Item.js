import { useState } from "react";
import '../App.css'


function Item() {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => {
        setExpand(!expand);
        console.log(expand);
    }

    return(
        <div className="card">
            <button className="btn" onClick={toggleExpand}>Header <span>{expand? '-' : '+'}</span></button>
            {expand && <p className="content">Content in here</p>}      
        </div>
    )
}

export default Item;