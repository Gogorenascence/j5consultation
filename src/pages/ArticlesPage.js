import { NavLink } from "react-router-dom";

function ArticlesPage({
    articles,
    externalArticles
}) {

    window.scroll(0, 0)

    return (
        <div className="flexColumnFull">
            <h1>Articles</h1>
            <div className="articlesContainer">
                <>
                    {
                        articles.sort((a,b) => b.order - a.order).map((article) => {
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
                        externalArticles.sort((a,b) => b.order - a.order).map((article) => {
                            return (
                                <a href={article.externalArticle} target="_blank" rel="noreferrer" key={article.title} className="navLink">
                                    <div className="articleBoxTop flexFull">
                                        <img src={article.pictureURL ?? "j5ch.png"}
                                            className={article.pictureURL? "articleImage": "articleImage2"}/>
                                    </div>
                                    <div className="articleBoxBottom flexFull">
                                        <p className="articleTitleLink">{article.title}</p>
                                    </div>
                                </a>
                    )})}
                </>
            </div>
            <br/>
        </div>
    );
}

export default ArticlesPage;
