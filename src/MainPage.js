import { NavLink } from "react-router-dom";

function MainPage({
  services,
  articles,
  externalArticles
}) {

  window.scroll(0, 0)
  const mission = "We strive to provide expert guidance and comprehensive evaluations in workers' compensation, social security disability, and personal injury cases, ensuring fair, effective claim management and supporting recovery, and clarity for all parties involved."
  const recentArticles = articles.concat(externalArticles).sort((a,b)=> b.order - a.order).slice(0, 4)
  const serviceNames = services.map(service => service.title)
  console.log(serviceNames)

  return (
    <div className="flexColumnFull">
      <img src="j5ch.png" className="logo"/>
      <div style={{margin: "20px"}}>
        <p className="margin-0 contactText2">{mission}</p>
      </div>
      <div className="mainContactBox">
        <p className="contactHeader">Contact Info</p>
        <p className="contactText2">
            Phone: <a href="tel:682-472-1132">682-472-1132</a>
        </p>
        <p className="contactText3">Fax: 817-977-0333</p>
        <p className="contactText3">
            Email: <a href="mailto:j5healthcenters@gmail.com">j5healthcenters@gmail.com</a>
        </p>
        <p className="contactHeader">Location</p>
        <p className="contactText2">5601 Bridge St. STE 300</p>
        <p className="contactText3">Fort Worth, TX 76112</p>
        <p className="contactHeader">Hours</p>
        <div className='flex'>
            <div className='days marginTop-10'>
                <p className="contactText3">Mon</p>
                <p className="contactText3">Tue</p>
                <p className="contactText3">Wed</p>
                <p className="contactText3">Thu</p>
                <p className="contactText3">Fri</p>
                <p className="contactText3">Sat</p>
            </div>
            <div className='times marginTop-10'>
                <p className="contactText3">8:30am – 5:00pm</p>
                <p className="contactText3">8:30am – 5:00pm</p>
                <p className="contactText3">8:30am – 5:00pm</p>
                <p className="contactText3">8:30am – 5:00pm</p>
                <p className="contactText3">8:30am – 12:00pm</p>
                <p className="contactText3">12:00pm – 4:00pm</p>
            </div>
        </div>
        <br/>
        <NavLink to="/contact" className="navLink">
          <button className="blueSubmit">Message Us</button>
        </NavLink>
      </div>
      <h1 className="marginTop-10">Recent Articles</h1>
      <div className="articlesContainer">
          <>
              {
                  recentArticles.sort((a,b) => b.order - a.order).map((article) => {
                      return (
                        <>
                          {article.externalArticle?
                            <a href={article.externalArticle} target="_blank" rel="noreferrer" key={article.title} className="navLink">
                              <div className="articleBoxTop flexFull">
                                <img src={article.pictureURL ?? "j5ch.png"}
                                    className={article.pictureURL? "articleImage": "articleImage2"}/>
                              </div>
                              <div className="articleBoxBottom flexFull">
                                  <p className="articleTitleLink">{article.title}</p>
                              </div>
                            </a>:
                            <NavLink to={article.articleID} className="navLink">
                              <div className="articleBoxTop flexFull">
                                <img src={article.pictureURL} className="articleImage"/>
                              </div>
                              <div className="articleBoxBottom flexFull">
                                <p className="articleTitleLink">{article.title}</p>
                              </div>
                            </NavLink>
                          }
                        </>
              )})}
          </>
      </div>
      <NavLink to="/articles" className="navLink">
        <button className="blueSubmit">See All Articles</button>
      </NavLink>
    </div>
  );
}

export default MainPage;
