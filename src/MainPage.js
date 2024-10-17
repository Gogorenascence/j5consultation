import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function MainPage({
  services,
  articles,
  externalArticles
}) {

  // window.scroll(0, 0)
  const mission = "We strive to provide expert guidance and comprehensive evaluations in workers' compensation, social security disability, and personal injury cases, ensuring fair, effective claim management and supporting recovery, and clarity for all parties involved."
  const serviceNames = services.map(service => service.title)

  const [recentArticles, setRecentArticles] = useState([])

  useEffect(() => {
    setRecentArticles([...articles, ...externalArticles].sort((a,b)=> b.order - a.order).slice(0, 3))
  }, [])

  const shiftList = (direction) => {
    setRecentArticles((prevArticles) => {
      let newRecentArticles;
      if (direction === "right") {
        const movedItem = prevArticles[0];
        const newRecentArticles = prevArticles.slice(1); // Move first item to end
        console.log(newRecentArticles)
        const finalRecentArticles = [...newRecentArticles, movedItem]
        console.log(finalRecentArticles)
      } else {
        const movedItem = prevArticles[prevArticles.length - 1];
        console.log(movedItem)
        const newRecentArticles = [...prevArticles].slice(0, -1).push; // Move last item to start
        console.log(newRecentArticles)
      }
      console.log(newRecentArticles)
      return newRecentArticles;
    })
  }

  return (
    <div className="flexColumnFull">
      <img src="j5ch.png" className="logo"/>
      <div style={{margin: "20px auto", maxWidth: "800px"}}>
        <p className="mainContactText">{mission}</p>
      </div>
      <div className="mainContactBox">
        <div>
          <p className="contactHeader">Contact Info</p>
          <p className="contactText2">
              Phone: <a href="tel:682-472-1132">682-472-1132</a>
          </p>
          <p className="contactText3">Fax: 817-977-0333</p>
          <p className="contactText3">
              Email: <a href="mailto:j5healthcenters@gmail.com">j5healthcenters@gmail.com</a>
          </p>
        </div>
        <div>
          <p className="contactHeader">Location</p>
          <p className="contactText2">5601 Bridge St. STE 300</p>
          <p className="contactText3">Fort Worth, TX 76112</p>
        </div>
        <div>
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
        </div>
        <br/>
      </div>
        <NavLink to="/contact" className="navLink">
          <button className="blueSubmit">Message Us</button>
        </NavLink>
      <h1 className="marginTop-10">Recent Articles</h1>
      <div className="articlesContainer medi aHidden">
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
                    <NavLink to={`articles/${article.articleID}`} className="navLink">
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
      <div className="carouse lContainer hidden2">
        <img src="previous.png"
          onClick={() => shiftList("left")}
        />
        <>
          {
            recentArticles.map((article) => {
              return (
                <>
                  {article.externalArticle?
                    <a href={article.externalArticle} target="_blank"
                      rel="noreferrer"
                      key={article.title}
                      className="carouselLink"
                    >
                      <div className="carouselBoxTop flexFull">
                        <img src={article.pictureURL ?? "j5ch.png"}
                            className={article.pictureURL? "articleImage": "articleImage2"}/>
                      </div>
                      <div className="carouselBoxBottom flexFull">
                          <p className="articleTitleLink">{article.title}</p>
                      </div>
                    </a>:
                    <NavLink to={`articles/${article.articleID}`} className="carouselLink">
                      <div className="carouselBoxTop flexFull">
                        <img src={article.pictureURL} className="articleImage"/>
                      </div>
                      <div className="carouselBoxBottom flexFull">
                        <p className="articleTitleLink">{article.title}</p>
                      </div>
                    </NavLink>
                  }
                </>
          )})}
        </>
        <img src="next.png"
          onClick={() => shiftList("right")}
        />
      </div>
      <NavLink to="/articles" className="navLink marginTop-10">
        <button className="blueSubmit">See All Articles</button>
      </NavLink>
    </div>
  );
}

export default MainPage;
