import axios from "axios";

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

    document.querySelector(".next").addEventListener("click", () => {
        get_news(nextUrl);
    });
    document.querySelector(".prev").addEventListener("click", () => {
        get_news(previoseUrl);
    });
};

export default get_news;

export const newsWidget = `
        <div gs-h='2' gs-w='4'>
            <div class="grid-stack-item-content" >
                <div class="widget news" id="news_widget">
                    <h2>News</h2>
                    <div class="body">
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="content">
                            <h3 class="title">Loading...</h3>
                            <div class="summary">Loading...</div>
                            <div class="source">
                                Source: 
                                <a href="#" target="_blank">Loading...</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="prev">
                            prev
                        </div>
                        <div class="next">
                            next
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
