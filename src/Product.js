import React from "react";

function Product({tag, image, alt, name, price}) {
    return (
        <article>
            <span>{tag}</span>
            <img src={image} alt={alt}/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default Product