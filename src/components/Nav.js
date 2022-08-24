import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/1"}>Luke</Link>
            <Link to={"/2"}>Brendan</Link>
            <Link to={"/3"}>Benjamin</Link>
        </nav>
    )
}

export default Nav;