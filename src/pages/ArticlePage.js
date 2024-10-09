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


    return (
        <div className="flexColumnFull">

        </div>
    );
}

export default ArticlePage;
