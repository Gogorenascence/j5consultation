import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ArticlePage({
    articles
}) {

    const { articleID } = useParams()
    const [article, setArticle] = useState({
        "title": "",
        "date": "",
        "author": "",
        "authorDetails": "",
        "text": "",
    })

    const processedText = (text) => {
        return text?.split("//");
    };

    const processedBigLine = (line) => {
        return line?.replace("]]", "");
    };

    const getArticle = () => {
        const articleData = articles.find((article) => article.articleID === articleID)
        setArticle(articleData)
        console.log(articleData)
    }

useEffect(() => {
    getArticle()
},[articleID])

    window.scroll(0, 0)

    return (
        <div className="flexColumnFull">
            <div className="sectionContainer">
                <br/>
                <h1 className="margin-0 articleTitle">{article.title}</h1>
                <br/>
                <div className="flexItems articleTitle">
                    <div className="iconContainer">
                        { article.author && article.authorPictureURL?
                            <img src={article.authorPictureURL} className="userIcon"/>:
                            <div className="userIcon flexFull">
                                <p className="userIconOverlay">{article.author[0]}</p>
                            </div>
                        }
                    </div>
                    <div className="marginLeft15">
                        <h3 className="articleTitle">{article.author}</h3>
                        <p className="articleAD">{article.authorDetails}</p>
                    </div>
                </div>
                <br/>
                <p className="margin-0 articleAD">{article.date}</p>
                {processedText(article.text)?.map((line) => (
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
        </div>
    );
}

export default ArticlePage;
