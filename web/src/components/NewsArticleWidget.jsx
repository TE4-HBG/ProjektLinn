import { useEffect, useState } from "react";
import xmlJs from 'xml-js';

export const NewsArticleWidget = () => {
    const [xmlData, setXmlData] = useState(null);

    useEffect(() => {
        fetch('https://rss.aftonbladet.se/rss2/small/pages/sections/senastenytt/')
            .then((response) => response.text())
            .then((xmlText) => {
                const jsonData = xmlJs.xml2json(xmlText, { compact: true, spaces: 4 });
                setXmlData(JSON.parse(jsonData));
            })
            .catch((error) => {
                console.error('Error fetching XML data:', error);
            });
    }, []);

    if (!xmlData || !xmlData.rss || !xmlData.rss.channel || !xmlData.rss.channel.item) {
        return <div>Loading...</div>;
    }

    const newsItems = xmlData.rss.channel.item.slice(0, 3);
    //fix release date (pubDate) and images (enclosure => attributes)
    return (
        <div>
            {newsItems.map((item, index) => (
                <div key={index}>
                    
                    <h1><strong>{item.title._cdata}</strong></h1>
                    <p>{item.description?._cdata}</p>
                    <p>{item.pubDate?._text}</p>
                    <img src={item?.enclosure?._attributes.url} alt="" />
                    {console.log("XML Data: ", xmlData)}
                </div>
            ))}
        </div>
    );
};
