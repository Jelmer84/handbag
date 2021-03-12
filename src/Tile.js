import React from "react";

function Tile({image, alt, title, children}) {
    if (!image) {
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    } else {
        return (
        <section>
            <img src={image} alt={alt}/>
        </section>
        );
    }
}
export default Tile




