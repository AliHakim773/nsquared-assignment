import axios from "axios";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const get_news = async (
    requestUrl = "https://api.spaceflightnewsapi.net/v4/blogs/?limit=1"
) => {
    const res = await axios.get(requestUrl);
    const nextUrl = res.data.next;
    const previoseUrl = res.data.previose;
    const news = res.data.results[0];

    console.log(news);

    const url = news.url;
    const title = news.title;
    const image = news.image_url;
    const source = news.news_site;
    const summary = news.summary;

    console.log(url, title, image, source, summary);
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".img > img").src = image;
    document.querySelector(".summary").innerHTML = summary;
    document.querySelector(".source > a").innerHTML = source;
    document.querySelector(".source > a").href = url;

    next.addEventListener("click", () => {
        get_news(nextUrl);
    });
    prev.addEventListener("click", () => {
        get_news(previoseUrl);
    });
};

get_news();
