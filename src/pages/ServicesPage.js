import React, { useState, useEffect } from 'react'

function ServicesPage({
    services
}) {

    const [showLongDef, setShowLongDef] = useState({
        "workCompCase": false,
        "ir": false,
        "altIR": false,
        "programs": false,
        "ssdConsult": false,
        "ssdTestReview": false,
        "piCase": false,
        "piReview": false
    })

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const handleShowLongDef = (term) => {
        if (showLongDef[term]) {
            setShowLongDef({...showLongDef, [term]: false})
        } else {
            setShowLongDef({
                "workCompCase": term === "workCompCase",
                "ir": term === "ir",
                "altIR": term === "altIR",
                "programs": term === "programs",
                "ssdConsult": term === "ssdConsult",
                "ssdTestReview": term === "ssdTestReview",
                "piCase": term === "piCase",
                "piReview": term === "piReview"
            })
        }
    }

    return (
        <div className="flexColumnFull">
            <h1>Services</h1>
            <div className="articlesContainer">
                <>
                    {
                        services.map((service) => {
                            return (
                                <div onClick={() => handleShowLongDef(service.term)}>
                                    <div className="articleBoxTop flexFull">
                                        <img src={service.pictureURL} className="articleImage"/>
                                    </div>
                                    <div className="serviceBoxBottom flexColumnItems"
                                        style={{height: showLongDef[service.term]? "440px": "220px"}}
                                    >
                                        <p className="serviceTitle">{service.title}</p>
                                        <p className={!showLongDef[service.term]? "serviceText": "hidden"}>{service.shortDef}</p>
                                        <p className={showLongDef[service.term]? "serviceText": "hidden"}>{service.longDef}</p>
                                    </div>
                                </div>
                    )})}
                </>
            </div>
            <br/>
        </div>
    );
}

export default ServicesPage;
