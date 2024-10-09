function ServicesPage({
  servicesText
}) {

    document.body.style.overflow = 'auto';

    const processedText = (text) => {
        return text?.split("//");
    };

    const processedBigLine = (line) => {
        return line?.replace("]]", "");
    };
console.log(servicesText)

    return (
      <div className="flexColumnFull">
        <br/>
        <h1 className="welcome margin-0">Our Services</h1>
        <div className="sectionContainer">
          {processedText(servicesText.text)?.map((line) => (
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

  export default ServicesPage;
