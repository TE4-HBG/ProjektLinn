import React, { useEffect, useState } from "react";

export const NewsArticleWidget = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://newsapi.org/v2/everything?domains=techcrunch.com,the-verge&apiKey=4dff92e8c6fd40359f10cc1713cea275"
                );
                const data = await response.json();
                setArticles(data.articles); // Update the state with the articles array
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    console.log(articles);

    return (
        <>
            {articles.map((article, index) => (
                <div key={index}>
                    <h1><strong>{article.title}</strong></h1>
                    <p>{article.description}</p>
                    <a href={article.url}>Read more</a>
                    <img src={article.urlToImage} alt="" />
                    <br />
                    <br />
                </div>
            ))}
        </>
    );
};
