import React, { useEffect, useState } from "react";

function ImageContainer({
    imageSRC
}) {

    return (
        <div className="imageContainer">
            <img className="imageContent" src={imageSRC}/>
        </div>
    );
}

export default ImageContainer;
