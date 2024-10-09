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
                                <NavLink to={`articles/${article.articleID}`}>
                                    <div className="articleBox">
                                        {article.title}
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
                                <NavLink to={`articles/${article.articleID}`}>
                                    <div className="articleBox">
                                        {article.title}
                                    </div>
                                </NavLink>
                    )})}
                </>
            </div>
        </div>
    );
}

export default ArticlesPage;
