import { NavLink } from "react-router-dom";

function ArticlesPage({
    articles
}) {

    return (
        <div className="flexColumnFull">
            <h1>Articles</h1>
            <div className="articlesContainer">
                <>
                    {
                        articles.map((article) => {
                            return (
                                <NavLink to={article.articleID} className="navLink">
                                    <div className="articleBoxTop flexFull">
                                        <img src={article.pictureURL} className="articleImage"/>
                                    </div>
                                    <div className="articleBoxBottom flexFull">
                                        <p className="articleTitleLink">{article.title}</p>
                                    </div>
                                </NavLink>
                    )})}
                </>
            </div>
            <h1>External Articles</h1>
            <div className="articlesContainer">
                <>
                    {
                        articles.map((article) => {
                            return (
                                <NavLink to={`articles/${article.articleID}`} className="navLink">
                                    <div className="articleBoxTop flexFull">
                                        <img src={article.pictureURL} className="articleImage"/>
                                    </div>
                                    <div className="articleBoxBottom flexFull">
                                        <p className="articleTitle">{article.title}</p>
                                    </div>
                                </NavLink>
                    )})}
                </>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default ArticlesPage;
