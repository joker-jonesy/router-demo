import React from "react";
import {Outlet, useParams} from "react-router-dom";

function Product(){

    const params = useParams();

    const list = ["Luke", "Brendan", "Benjamin"]

    return(
        <div>
            <h1>{list[params.id-1]}</h1>
            <Outlet/>
        </div>

    )
}

export default Product;