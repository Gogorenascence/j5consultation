function AboutPage({
  bios
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
      <div className="mediaFlexFull">
        <div className="mediaHidden">
          <h1 className="bioTitle margin-0">Dr. Jamon Clayton</h1>
          <img src="clayton.jpg" className="bioPic"/>
          <div className="">
            <p className="bioCredText">{bios.license}</p>
            <p className="bioCredText">{bios.certifications}</p>
          </div>
        </div>
        <div className="sectionContainer mediaSplit">
          {processedText(bios.text)?.map((line) => (
              <>
                  {line.includes("]]") ? (
                      <p className="sectionHeader">
                          {processedBigLine(line)}
                      </p>
                  ) : (
                      <p className="section margin-bottom-0 margin-0 contactText2">
                          {line}
                      </p>
                  )}
              </>
          ))}
        </div>
        <div className="mediaDisplay hidden2 mediaSplit">
          <h1 className="bioTitle margin-0">Dr. Jamon Clayton</h1>
          <img src="clayton.jpg" className="bioPic"/>
          <div className="">
            <p className="bioCredText">{bios.license}</p>
            <p className="bioCredText">{bios.certifications}</p>
          </div>
        </div>
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

export default AboutPage;
