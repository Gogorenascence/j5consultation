import React, { useEffect, useState } from "react";

function BackToTop() {
    const showOnPx = 300;
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const scrollContainer = () => {
            return document.documentElement || document.body;
        };

        const handleScroll = () => {
            if (scrollContainer().scrollTop > showOnPx){
                setShowButton(true);
            }else{
                setShowButton(false);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [showOnPx]);

    const goToTop = () => {
        const duration = 800; // Adjust duration in milliseconds for faster or slower scroll
        const start = document.documentElement.scrollTop || document.body.scrollTop;
        const startTime = performance.now();

        const easeOutQuad = (t) => t * (2 - t);

        const scroll = (timestamp) => {
            const currentTime = timestamp - startTime;
            const timeFraction = Math.min(currentTime / duration, 1);
            const easing = easeOutQuad(timeFraction);

            window.scrollTo(0, start * (1 - easing));

            if (currentTime < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    return (
        <div>
            <img
                className={`back-to-top ${showButton ? null : "hidden"}`}
                src="up.png"
                onClick={goToTop}>
            </img>
        </div>
    );
}

export default BackToTop;
