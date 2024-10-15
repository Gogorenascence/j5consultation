function FAQPage({
    faqText
}) {

    window.scroll(0, 0)

    const processedText = (text) => {
        return text?.split("//");
    };

    const processedBigLine = (line) => {
        return line?.replace("]]", "");
    };


    return (
        <div className="flexColumnFull">
            <br/>
            <h1 className="margin-0">FAQs</h1>
            <div className="sectionContainer">
                {processedText(faqText.text)?.map((line) => (
                    <>
                        {line.includes("]]") ? (
                            <p className="sectionHeader">
                                {processedBigLine(line)}
                            </p>
                        ) : (
                            <p className="section margin-bottom-0">
                                {line}
                            </p>
                        )}
                    </>
                ))}
            </div>
            <br/>
        {/* <NavLink to="directory">
            <h2>Check the Application Directory -></h2>
        </NavLink>
        <br/>
        <NavLink to="conditions">
            <h2>Check the Conditions List -></h2>
        </NavLink> */}
        </div>
    );
}

export default FAQPage;
