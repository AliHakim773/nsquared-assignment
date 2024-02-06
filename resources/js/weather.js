import axios from "axios";

const getWeather = async () => {
    const res = await axios.get("/weather");
    const weather = res.data;
    const day = weather[0].days[0];

    const temp = day.temp;
    const tempmin = day.tempmin;
    const tempmax = day.tempmax;
    const description = weather[0].description;
    const loc = weather[0].timezone;
    const icon = day.icon;

    document.querySelector(".temp").innerHTML = temp + " °F";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".location").innerHTML = loc
        .split("/")[1]
        .split("_")
        .join(" ");
    document.querySelector(".icon > img").src = `/images/${icon}.svg`;
    document.querySelector(".tempmin").innerHTML = tempmin;
    document.querySelector(".tempmax").innerHTML = tempmax;
};

export default getWeather;

export const weatherWidget = `
        <div gs-h='1' gs-w='3'>
            <div class="grid-stack-item-content" >
                <div class="widget weather" id="weather_widget">
                    <div class="header">
                        <div class="main-info">
                            <h2>Weather</h2>
                            <div class="temp">Loading...</div>
                            <div class="location">Loadding...</div>      
                        </div>
                        <div class="extra-info">
                            <div class="icon">
                                <img src="" alt="">
                            </div>
                            <div class="minmax">
                                <div class="tempmin">Loading...</div>
                                <div class="tempmax">Loading...</div>
                            </div>
                        </div>
                    </div>
                        <div class="description">Loading...</div>
                    </div>
            </div>
        </div>
        `;
