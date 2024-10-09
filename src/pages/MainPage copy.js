function MainPage({}) {

  document.body.style.overflow = 'auto';

    return (
      <div className="flexColumnFull">
        <br/>
        <h1 className="welcome">Welcome!</h1>
        <div style={{margin: "40px"}}>
          <h2 className="margin-0">Invisible Action Foundation is dedicated to empowering individuals with invisible illnesses by bridging the gap between their daily needs and institutional support. By offering informational resources, case management, and self-triage tools, we aim to improve quality of life and support individuals in answering the question, "What can I do today?"</h2>
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

  export default MainPage;
