function ServicesPage({
    services
}) {

    return (
        <div className="flexColumnFull">
            <h1>Services</h1>
            <div className="articlesContainer">
                <>
                    {
                        services.map((service) => {
                            return (
                                <div>
                                    <div className="articleBoxTop flexFull">
                                        <img src={service.pictureURL} className="articleImage"/>
                                    </div>
                                    <div className="articleBoxBottom flexFull">
                                        <p className="articleTitleLink">{service.title}</p>
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
