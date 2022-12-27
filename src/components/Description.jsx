import { useLocation, useParams } from "react-router-dom";
import React from 'react'

function Description(data) {
    let { name } = useParams();//me muestra el nombre del articulo
    const type = useLocation().pathname.split("/")[1];//me muestra la seccion donde estoy parado
    const items = data[type];
    const item = items.find((item) => item.name === name);//me muestra el nombre del arreglo de prendas o tablas
    return (
        
        <>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Score: {item.score}</p>
        </>
    )
}

export default Description